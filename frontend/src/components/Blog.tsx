import { Link } from "react-router-dom";

interface BlogCardProps {
  id: any;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const Blog = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex  items-center">
          <div className="flex flex-col justify-center pl-1">
            <Avatar name={authorName} size={"big"}></Avatar>
          </div>
          <div className="pl-2 font-extralight text-sm">{authorName}</div>
          <div className=" text-lg flex flex-col text-slate-400 justify-center  items-center p-1 pl-2">
            .
          </div>
          <div className="pl-2 font-thin text-slate-400">{publishedDate}</div>
        </div>
        <div className="text-xl font-bold pl-2">{title}</div>

        <div className="text-sm pt-2 text-slate-700 pl-2">
          {content.slice(0, 100) + "...."}
        </div>
        <div className=" text-slate-400 pl-2 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
};

export const Avatar = ({ name, size }: { name: string; size: any }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};
