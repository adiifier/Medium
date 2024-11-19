import { useNavigate } from "react-router-dom";
import { Avatar } from "./Blog";

export const AppBar = ({ name }: any) => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center text-3xl font-black text-grey-900 space-x-4 cursor-pointer"
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Scribe
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-black">
            About
          </a>
          <a
            onClick={() => {
              navigate("/publish");
            }}
            className="text-gray-700 cursor-pointer text-xl font-bold hover:text-black"
          >
            Write
          </a>
        </nav>

        {/* Search and Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="hidden lg:flex items-center border rounded-md px-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 py-1 outline-none text-gray-700"
            />
            <button className="text-gray-600">🔍</button>
          </div>

          {/* Sign Up Button */}

          <Avatar name={name || "anonymous"} size={8}></Avatar>
        </div>
      </div>
    </header>
  );
};
