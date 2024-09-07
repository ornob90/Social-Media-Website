const CommentSkeleton = () => {
  return (
    <div className="md:grid flex animate-pulse md:grid-cols-12 items-start gap-x-2 sm:gap-x-4 md:gap-x-4 lg:gap-x-8 py-2 w-[90%]">
      <div className="md:col-span-1 w-max">
        <div className="size-8 bg-gray-200 rounded-full"></div>
      </div>
      <ul className="max-md:flex-1 md:col-span-11 flex flex-col justify-between">
        <li className="flex justify-between mb-3">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-2">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            <p className="w-16 h-3 bg-gray-200 rounded mt-1 md:mt-0"></p>
          </div>
          <div className="flex justify-end gap-x-3">
            {/* <div className="w-5 h-5 bg-gray-200 rounded-full"></div> */}
            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          </div>
        </li>
        <li className="dark:text-white text-[12px]">
          <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
        </li>
      </ul>
    </div>
  );
};

export default CommentSkeleton;
