import React, { useEffect, useState } from "react";

const Content = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  // constants
  const MAX_WORDS_ALLOWED = 50;
  const TOTAL_WORDS = content?.split(" ")?.length;
  const IS_SMALL_CONTENT = TOTAL_WORDS <= MAX_WORDS_ALLOWED;

  // states
  const [formattedContent, setFormattedContent] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);

  // functions
  const getShortContent = () => {
    return content
      .split(" ")
      .slice(0, MAX_WORDS_ALLOWED + 1)
      .join(" ");
  };

  // effects
  useEffect(() => {
    if (IS_SMALL_CONTENT) return setFormattedContent(content);

    setFormattedContent(getShortContent());
  }, [content]);

  return (
    <p className={` ${className}`}>
      {formattedContent}
      {!IS_SMALL_CONTENT && (
        <>
          {isShowMore ? (
            <span
              onClick={() => {
                setFormattedContent(getShortContent());
                setIsShowMore(!isShowMore);
              }}
              className=" text-primary underline ml-1 cursor-pointer"
            >
              See Less
            </span>
          ) : (
            <span
              onClick={() => {
                setFormattedContent(content);
                setIsShowMore(!isShowMore);
              }}
              className=" text-primary underline ml-1 cursor-pointer"
            >
              See More
            </span>
          )}
        </>
      )}
    </p>
  );
};

export default Content;
