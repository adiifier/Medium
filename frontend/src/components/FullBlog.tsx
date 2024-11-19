import { Blog } from "../hooks";
import { AppBar } from "./Appbar";
import { Avatar } from "./Blog";

export const FullBlog = ({ blog }: any) => {
  return (
    <div>
      <AppBar name={blog.author.name || "Anonymous"}></AppBar>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200  max-w-screen-2xl pt-12">
          <div className="m-30 col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd december 2023</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className=" col-span-4">
            <div className="text-slate-500 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar
                  name={blog.author.name || "anonymous"}
                  size={6}
                ></Avatar>
              </div>
              <div className="pl-2 mt-1">
                <div className="text-xl font-bold ">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2">
                  Random Catch Phrase the about the author's ability to grab
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
