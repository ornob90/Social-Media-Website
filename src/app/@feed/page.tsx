import PostForm from "@/components/ui/home/Feed/PostForm/PostForm";
import LeftNavigation from "@/components/ui/home/LeftNavigation/LeftNavigation";

const Feed = () => {
  return (
    <div className="min-h-screen grid grid-cols-8 gap-3">
      <LeftNavigation />
      {/* Main Feed  */}
      <section className="col-span-6 bg-white min-h-screen px-4">
        <PostForm />
      </section>
    </div>
  );
};

export default Feed;
