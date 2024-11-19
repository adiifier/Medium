import { useState } from "react";

import { Texteditor } from "../components/Texteditor";
import { AppbarforPusblish } from "../components/AppbarforPublish";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");
  const [published, setPublished] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <AppbarforPusblish
        published={published}
        setpublished={setPublished}
        title={title}
        content={content}
      >
        {" "}
      </AppbarforPusblish>
      <div className="max-w-screen-lg pt-8   w-full">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="bg-gray-50  text-gray-900 focus:outline-none text-sm rounded-lg h-20  block w-full p-2.5  "
          placeholder="Title"
        />
        <div></div>
        <div className="mt-3 h-[400px]">
          <Texteditor content={content} SetContent={setCotent}></Texteditor>
        </div>
        <div className="mt-10">
          {published === true ? (
            <div className="">
              <div className="mt-6 p-2  bg-gray-100 border border-gray-300 text-gray-600 text-sm font-bold text-center">
                Published
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
