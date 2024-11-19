import { AppBar } from "../components/Appbar";
import { Blog } from "../components/Blog";
import { Skeleton } from "../components/Skelton";
import { useBlogs } from "../hooks";

export const Blogpage = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <Skeleton></Skeleton>
      </div>
    );
  }

  return (
    <>
      <div>
        <AppBar></AppBar>
      </div>
      <div className="flex justify-center  p-4">
        <div className="  max-w-xl">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            ></Blog>
          ))}
        </div>
      </div>
    </>
  );
};
