"use client";
import Button from "@/components/html/Button/Button";
import { useEdgeStore } from "@/providers/EdgeStoreProvider";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloudUpload } from "react-icons/io5";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";
import PostImageUploadProgressBar from "@/components/ui/createPost/PostImageUploadProgressBar";
import { useSession } from "next-auth/react";

interface PostInput {
  content: string;
}

export interface ImageUrl {
  url: string;
  thumbnailUrl: string | null;
}

const PostForm = ({
  postAvailable,
  onCloseModal,
}: {
  postAvailable: string;
  onCloseModal?: () => void;
}) => {
  // states
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState<ImageUrl[]>([]);

  // packages hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostInput>();
  const { edgestore } = useEdgeStore();
  const session = useSession();

  // functions
  const makeFilesPermanent = async () => {
    try {
      for (const url of urls) {
        await edgestore.publicImages.confirmUpload({
          url: url.url,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data: PostInput) => {
    try {
      await makeFilesPermanent();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const uploadFile = async () => {
    if (!file) return;

    try {
      const res = await edgestore.publicImages.upload({
        file,
        options: {
          temporary: true,
        },
        onProgressChange: (progress) => setProgress(progress),
      });

      setUrls([
        ...urls,
        {
          url: res.url,
          thumbnailUrl: res.thumbnailUrl,
        },
      ]);
      setFile(null);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // effects
  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  console.log(urls);

  return (
    <form className="mt-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
      <div className=" relative">
        <textarea
          {...register("content", {
            required: true,
          })}
          placeholder="What's happening?"
          className="!w-full lg:w-[49%] min-h-[150px] focus:outline-none bg-light-gray pl-4 py-4 placeholder:text-base md:placeholder:text-md rounded-lg"
        />

        <div className="absolute bottom-[10%]  right-[2%]">
          {[0, 100].includes(progress) ? (
            <label htmlFor="post-file" className="  cursor-pointer">
              <IoCloudUpload className="  text-primary/90 text-2xl" />
            </label>
          ) : (
            <Spinner size="sm" className=" " />
          )}
        </div>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target.files && setFile(e.target.files[0]);
          }}
          type="file"
          className=" hidden"
          id="post-file"
        />
      </div>
      {errors.content && (
        <p className=" text-red-500 text-xs">
          Please write what you feel. This is required!
        </p>
      )}
      {progress > 0 && progress < 100 && (
        <PostImageUploadProgressBar progress={progress} />
      )}

      <div className=" grid w-full h-full grid-cols-2  md:grid-cols-3 gap-4 mt-5">
        {urls?.map((url: ImageUrl) => (
          <div
            className="relative  h-[120px] min-[400px]:h-[150px] min-[500px]:h-[170px] min-[570px]:h-[190px] md:h-[170px] lg:h-[200px] rounded-lg"
            key={url.url}
          >
            <Image
              src={url.url}
              alt="post image"
              className="rounded-lg w-full  h-full"
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end gap-4 items-center mt-7">
        <Button
          onClick={onCloseModal}
          type="button"
          disabled={progress > 0 && progress < 100}
          className="bg-gray-200 text-black px-4 py-[7px] rounded-lg text-sm font-semibold disabled:text-gray-600 disabled:!bg-gray-300 disabled:cursor-not-allowed"
        >
          Discard
        </Button>
        <Button
          disabled={progress > 0 && progress < 100}
          className="bg-primary text-white px-4 py-[7px] rounded-lg text-sm font-medium   disabled:bg-primary/60  disabled:cursor-not-allowed"
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
