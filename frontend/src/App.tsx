import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./components/Blog";
import { Blogpage } from "./pages/Blogpage";
import { Blogsingle } from "./components/BlogSingle";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/blog/:id" element={<Blogsingle></Blogsingle>}></Route>
          <Route path="/blogs" element={<Blogpage></Blogpage>}></Route>
          <Route path="/publish" element={<Publish></Publish>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
