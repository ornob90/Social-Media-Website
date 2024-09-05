"use client";
import { ImageUrl } from "@/components/forms/PostForm/PostForm";
import { useEdgeStore } from "@/providers/EdgeStoreProvider";
import { Image } from "@nextui-org/image";
import React, { useEffect, useState } from "react";

const AddProfilePicBtn = () => {
  // states
  const [file, setFile] = useState<File | null>();
  const [url, setUrl] = useState<ImageUrl>();
  const [progress, setProgress] = useState(0);

  // packages hooks
  const { edgestore } = useEdgeStore();

  // functions
  const uploadFile = async () => {
    if (!file) return;

    try {
      const res = await edgestore.publicImages.upload({
        file,
        onProgressChange: (progress) => setProgress(progress),
      });

      setUrl({
        url: res.url,
        thumbnailUrl: res.thumbnailUrl,
      });
      setFile(null);
    } catch (error: any) {
      console.log(error.message);

      file && setFile(null);
    }
  };

  // effects
  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  return (
    <>
      <input
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
        id="profile-pic"
        type="file"
        className="hidden"
      />
      <label
        htmlFor="profile-pic"
        className="w-[25%]  absolute right-[-2%] bottom-[3%] bg-white rounded-full  cursor-pointer"
      >
        <Image src="/assets/add.svg" alt="Add Icon" className="w-full h-full" />
      </label>
    </>
  );
};

export default AddProfilePicBtn;
