import PostForm from "@/components/forms/PostForm/PostForm";
import Header from "@/components/shared/header/Header";
import PostAvailable from "@/components/ui/post/PostAvailable/PostAvailable";
import { SearchParams } from "@/types/global.types";

const CreatePost = ({ searchParams }: { searchParams: SearchParams }) => {
  const postAvailable = searchParams["post-available"] || "people";
  return (
    <section className="w-full no-scrollbar">
      <Header header="Create a Post" />
      {/* Post Availability  */}
      <div className="overflow-auto no-scrollbar">
        <div className="flex gap-4 min-w-[490px] overflow-scroll ">
          <PostAvailable
            src="/assets/globe.svg"
            alt="Globe Icon"
            type="People"
            subText="Your Post will be global"
            isActive={postAvailable === "people"}
          />
          <PostAvailable
            src="/assets/lock.svg"
            alt="Lock Icon"
            type="Private"
            subText="Your Post will be private"
            isActive={postAvailable === "private"}
          />
        </div>
      </div>
      <PostForm />
    </section>
  );
};

export default CreatePost;
