import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <Image src="/assets/share.svg" width={20} height={20} alt="Like Icon" />
      <p>10k</p>
    </div>
  );
};

export default Share;
