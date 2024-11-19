import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "./FullBlog";

export const Blogsingle = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || " " });
  if (loading) {
    return (
      <div>
        <Skeleton></Skeleton>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog}></FullBlog>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div>
      <div className="animate-pulse max-w-3xl mx-auto p-4 space-y-6">
        {/* Blog Title Skeleton */}
        <div className="h-10 bg-gray-300 rounded-md w-3/4"></div>

        {/* Author & Date Skeleton */}
        <div className="flex items-center space-x-4">
          {/* Author Avatar */}
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          {/* Author Name & Date */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded-md w-32"></div>
            <div className="h-4 bg-gray-300 rounded-md w-20"></div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="h-64 bg-gray-300 rounded-md w-full"></div>

        {/* Main Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded-md w-full"></div>
          <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded-md w-full"></div>
        </div>

        {/* Tags/Category Placeholder */}
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-300 rounded-md w-20"></div>
          <div className="h-6 bg-gray-300 rounded-md w-16"></div>
          <div className="h-6 bg-gray-300 rounded-md w-12"></div>
        </div>

        {/* Comment Section Skeleton */}
        <div className="space-y-4 mt-8">
          <div className="h-8 bg-gray-300 rounded-md w-1/2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
