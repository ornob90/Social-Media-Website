import React from "react";
import { Progress } from "@nextui-org/progress";

const PostImageUploadProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="border rounded-lg p-3">
      <p className=" text-sm"> {progress}%</p>
      <Progress value={progress} size="sm" />
    </div>
  );
};

export default PostImageUploadProgressBar;
