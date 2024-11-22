import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { InputBox } from "./Inputbox";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : ""}`,
        postInputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jwt = response.data;

      localStorage.setItem("token", jwt.jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Request failed");
    }
  }

  return (
    <div className=" h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div className="">
          <div>
            <div className="text-3xl font-extrabold ">
              {type === "signup"
                ? "Create an Account"
                : "Log in to your Account"}
            </div>
            <div className="text-slate-400 ">
              {type === "signin"
                ? "Dont Have an Account ?"
                : "Already have an account"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? (
              <InputBox
                label="Name"
                placeholder="Aditya Yadav..."
                onChange={(e) => {
                  setpostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              ></InputBox>
            ) : null}
            <InputBox
              label="Email"
              placeholder="Abc@gmail.com"
              onChange={(e) => {
                setpostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            ></InputBox>
            <InputBox
              type="password"
              label="Password"
              placeholder="12345..."
              onChange={(e) => {
                setpostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            ></InputBox>
            <button
              onClick={sendRequest}
              type="button"
              className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
