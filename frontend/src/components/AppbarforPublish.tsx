import { useNavigate } from "react-router-dom";
import { Avatar } from "./Blog";

import axios from "axios";
import { BACKEND_URL } from "../config";

export const AppbarforPusblish = ({
  title,
  content,
  published,
  setpublished,
  name,
}: any) => {
  function onclick() {
    const response = axios
      .post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.id) {
          setpublished(true);
        }
      });
  }

  const navigate = useNavigate();
  return (
    <header className="w-full bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4  flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-4 text-3xl font-black text-grey-900 cursor-pointer"
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
          <a className="text-gray-700 cursor-pointer text-xl font-bold hover:text-black">
            Write
          </a>
        </nav>

        {/* Search and Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}

          {/* Sign Up Button */}
          <button
            onClick={onclick}
            className="bg-black text-white py-1 px-4 rounded-full hover:bg-gray-800 transition duration-200"
          >
            {published === true ? "Published" : "Publish"}
          </button>
          <Avatar name="ad" size={9}></Avatar>
        </div>
      </div>
    </header>
  );
};
