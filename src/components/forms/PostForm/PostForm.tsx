"use client";

import { useEdgeStore } from "@/providers/EdgeStoreProvider";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloudUpload } from "react-icons/io5";
import { Spinner } from "@nextui-org/spinner";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
import PostImageUploadProgressBar from "@/components/ui/createPost/PostImageUploadProgressBar";
import { useSession } from "next-auth/react";
import { IoRemoveCircleSharp } from "react-icons/io5";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addPostAtFirst } from "@/redux/features/postSlice";
import { Button } from "@nextui-org/button";

interface PostInput {
  content: string;
}

export interface ImageUrl {
  url: string;
  thumbnailUrl: string | null;
}

const PostForm = ({
  privacy,
  onCloseModal,
}: {
  privacy: string;
  onCloseModal?: () => void;
}) => {
  // states
  const [files, setFiles] = useState<File[] | null>(null);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  // custom hooks
  const axiosInstance = useAxios();

  // session hooks
  const session = useSession();

  // redux hooks
  const dispatch = useDispatch();

  // packages hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostInput>();
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  // functions
  const makeFilesPermanent = async () => {
    try {
      for (const url of urls) {
        await edgestore.publicImages.confirmUpload({
          url: url,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const uploadFile = async (file: File) => {
    if (!file) return;

    try {
      const res = await edgestore.publicImages.upload({
        file,
        // options: {
        //   temporary: true,
        // },
        // onProgressChange: (progress) => setProgress(progress),
      });

      setUrls([...urls, res.url]);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data: PostInput) => {
    try {
      setIsPosting(true);
      const images: string[] = [];
      if (files) {
        await Promise.all(
          files?.map(async (file) => {
            const res = await edgestore.publicImages.upload({
              file,
            });

            images.push(res.url);
          })
        );
      }

      const post = {
        ...data,
        privacy,
        images: images,
      };

      const response = await axiosInstance.post("/posts/create", post);
      dispatch(addPostAtFirst(response.data?.data));
      router.push("/");
    } catch (error: any) {
      setIsPosting(false);
      console.log(error.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const validFiles: File[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];

        // Validate file type
        if (!file.type.startsWith("image/")) {
          console.log("Only image files are allowed.");
          continue;
        }

        // Validate file size
        if (file.size > 1024 * 1024) {
          console.log("File size should not exceed 1MB.");
          continue;
        }

        validFiles.push(file);
      }

      if (validFiles.length > 0) {
        setFiles(validFiles);
      } else {
        setFiles(null); // Reset if no valid files
      }
    }
  };

  const handleRemovePreviewFile = (removedIdx: number) => {
    setFiles(
      files?.filter((file: File, idx: number) => idx !== removedIdx) || []
    );
  };

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
              <IoCloudUpload className="  text-primary/90 text-2xl  md:text-3xl animate-bounce" />
            </label>
          ) : (
            <Spinner size="sm" className=" " />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          className=" hidden"
          id="post-file"
          onChange={handleFileChange}
        />
      </div>
      {errors.content && (
        <p className=" text-red-500 text-xs">
          Please write what you feel. This is required!
        </p>
      )}
      {/* {progress > 0 && progress < 100 && (
        <PostImageUploadProgressBar progress={progress} />
      )} */}

      <div className=" grid w-full h-full grid-cols-2  md:grid-cols-3 gap-4 mt-5">
        {files?.map((file: File, idx: number) => (
          <div key={idx} className="relative">
            <Image
              key={idx}
              src={URL.createObjectURL(file)}
              alt="post image"
              className="rounded-lg w-full  h-full      "
              width={140}
              height={140}
            />
            <div
              onClick={() => handleRemovePreviewFile(idx)}
              className=" bg-white rounded-full  size-fit"
            >
              <IoRemoveCircleSharp className="absolute right-0 top-0  text-red-500 text-2xl cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end gap-4 items-center mt-7">
        <Button
          type="button"
          disabled={(progress > 0 && progress < 100) || isPosting}
          className="bg-gray-200 text-black px-4 py-[7px] rounded-lg text-sm font-semibold disabled:text-gray-600 disabled:!bg-gray-300 disabled:cursor-not-allowed"
          size="sm"
          onClick={onCloseModal}
        >
          Discard
        </Button>
        <Button
          type="submit"
          disabled={(progress > 0 && progress < 100) || isPosting}
          className="bg-primary text-white px-4 py-[7px] rounded-lg text-sm font-medium   disabled:bg-primary/60  disabled:cursor-not-allowed"
          size="sm"
          isLoading={isPosting}
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;

// "use client";
// import Button from "@/components/html/Button/Button";
// import { useEdgeStore } from "@/providers/EdgeStoreProvider";
// import NextImage from "next/image";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { IoCloudUpload } from "react-icons/io5";
// import { Spinner } from "@nextui-org/spinner";
// import { Image } from "@nextui-org/image";
// import PostImageUploadProgressBar from "@/components/ui/createPost/PostImageUploadProgressBar";
// import { useSession } from "next-auth/react";

// interface PostInput {
//   content: string;
// }

// export interface ImageUrl {
//   url: string;
//   thumbnailUrl: string | null;
// }

// const PostForm = ({
//   postAvailable,
//   onCloseModal,
// }: {
//   postAvailable: string;
//   onCloseModal?: () => void;
// }) => {
//   // states
//   const [file, setFile] = useState<File | null>(null);
//   const [progress, setProgress] = useState(0);
//   const [urls, setUrls] = useState<ImageUrl[]>([]);

//   // packages hooks
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<PostInput>();
//   const { edgestore } = useEdgeStore();
//   const session = useSession();

//   // functions
//   const makeFilesPermanent = async () => {
//     try {
//       for (const url of urls) {
//         await edgestore.publicImages.confirmUpload({
//           url: url.url,
//         });
//       }
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   const onSubmit = async (data: PostInput) => {
//     try {
//       await makeFilesPermanent();
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   const uploadFile = async () => {
//     if (!file) return;

//     try {
//       const res = await edgestore.publicImages.upload({
//         file,
//         options: {
//           temporary: true,
//         },
//         onProgressChange: (progress) => setProgress(progress),
//       });

//       setUrls([
//         ...urls,
//         {
//           url: res.url,
//           thumbnailUrl: res.thumbnailUrl,
//         },
//       ]);
//       setFile(null);
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   // effects
//   useEffect(() => {
//     if (file) {
//       uploadFile();
//     }
//   }, [file]);

//   console.log(urls);

//   return (
//     <form className="mt-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
//       <div className=" relative">
//         <textarea
//           {...register("content", {
//             required: true,
//           })}
//           placeholder="What's happening?"
//           className="!w-full lg:w-[49%] min-h-[150px] focus:outline-none bg-light-gray pl-4 py-4 placeholder:text-base md:placeholder:text-md rounded-lg"
//         />

//         <div className="absolute bottom-[10%]  right-[2%]">
//           {[0, 100].includes(progress) ? (
//             <label htmlFor="post-file" className="  cursor-pointer">
//               <IoCloudUpload className="  text-primary/90 text-2xl" />
//             </label>
//           ) : (
//             <Spinner size="sm" className=" " />
//           )}
//         </div>
//         <input
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             e.target.files && setFile(e.target.files[0]);
//           }}
//           type="file"
//           className=" hidden"
//           id="post-file"
//         />
//       </div>
//       {errors.content && (
//         <p className=" text-red-500 text-xs">
//           Please write what you feel. This is required!
//         </p>
//       )}
//       {progress > 0 && progress < 100 && (
//         <PostImageUploadProgressBar progress={progress} />
//       )}

//       <div className=" grid w-full h-full grid-cols-2  md:grid-cols-3 gap-4 mt-5">
//         {urls?.map((url: ImageUrl) => (
//           <div
//             className="relative  h-[120px] min-[400px]:h-[150px] min-[500px]:h-[170px] min-[570px]:h-[190px] md:h-[170px] lg:h-[200px] rounded-lg"
//             key={url.url}
//           >
//             <Image
//               src={url.url}
//               alt="post image"
//               className="rounded-lg w-full  h-full"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="w-full flex justify-end gap-4 items-center mt-7">
//         <Button
//           onClick={onCloseModal}
//           type="button"
//           disabled={progress > 0 && progress < 100}
//           className="bg-gray-200 text-black px-4 py-[7px] rounded-lg text-sm font-semibold disabled:text-gray-600 disabled:!bg-gray-300 disabled:cursor-not-allowed"
//         >
//           Discard
//         </Button>
//         <Button
//           disabled={progress > 0 && progress < 100}
//           className="bg-primary text-white px-4 py-[7px] rounded-lg text-sm font-medium   disabled:bg-primary/60  disabled:cursor-not-allowed"
//         >
//           Post
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;
