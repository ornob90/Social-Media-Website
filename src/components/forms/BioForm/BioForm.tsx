import TextArea from "@/components/html/TextArea/TextArea";
import React from "react";

const BioForm = () => {
  return (
    <div>
      <p className="text-dark">Bio</p>
      <p className="text-dark-gray text-sm">0/150</p>
      <TextArea
        className="p-2  text-sm bg-gray-50"
        placeholder="Write about yourself.."
      />
    </div>
  );
};

export default BioForm;
