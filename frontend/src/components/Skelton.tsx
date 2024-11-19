import React from "react";

export const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-4 p-4 max-w-xl w-full">
      {/* Skeleton for AppBar */}
      <div className="h-10 bg-gray-300 rounded-lg"></div>

      {/* Skeleton for Blog Posts */}
      <div className="space-y-6">
        <SkeletonBlog />
        <SkeletonBlog />
        <SkeletonBlog />
      </div>
    </div>
  );
};

const SkeletonBlog = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-3">
      {/* Blog header */}
      <div className="h-6 bg-gray-300 rounded-md w-3/5"></div>

      {/* Blog subtitle */}
      <div className="h-4 bg-gray-300 rounded-md w-2/5"></div>

      {/* Blog content */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
      </div>
    </div>
  );
};
