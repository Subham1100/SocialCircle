import React from "react";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/widgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/slices/index";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      <div class="flex flex-col gap-4">
        {/* FIRST ROW */}
        <div class=" flex gap-4">
          <div>
            <UserImage image={picturePath} />
          </div>
          <input
            type="text"
            placeholder="What's on your mind..."
            onChange={(e) => setPost(e.target.value)}
            value={post}
            className="w-full bg-background-alt rounded-full py-4 px-8 text-neutral-dark"
          />
        </div>

        {/* SECOND ROW */}
        <div class="border-2 border-black p-2 ">
          <div>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  class="border-2 border-black w-full cursor-pointer border-dotted p-3"
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <div>
                      <p>{image.name}</p>
                      <button
                        onClick={() => setImage(null)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        </div>

        {/* THIRD ROW */}
        <div class="flex justify-between">
          <div
            onClick={() => setIsImage(!isImage)}
            class="flex flex-row flex-1 gap-2 border-r-2 p-3 border-gray-400 cursor-pointer"
          >
            <svg
              class="h-6 w-6 text-neutral-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
              <circle cx="8.5" cy="8.5" r="1.5" />{" "}
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p>Image</p>
          </div>
          <div class="flex flex-row flex-1 gap-2 border-r-2 p-3 border-gray-400 cursor-pointer">
            <svg
              class="h-6 w-6 text-neutral-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polygon points="23 7 16 12 23 17 23 7" />{" "}
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <p>Clip</p>
          </div>
          <div class="flex flex-row flex-1 gap-2 border-r-2 p-3 border-gray-400 cursor-pointer">
            {" "}
            <svg
              class="h-6 w-6 text-neutral-dark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
            </svg>
            <p>Attachments</p>
          </div>
          <div class="flex flex-row flex-1 gap-2 border-r-2 p-3 border-gray-400 cursor-pointer">
            <svg
              class="h-6 w-6 text-neutral-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <p>Audio</p>
          </div>
          <div class="flex flex-row flex-1 gap-2 border-r-2 p-2 border-gray-400 justify-center ">
            <button
              disabled={!post}
              onClick={handlePost}
              class=" bg-primary-main rounded-2xl py-2 px-4 cursor-pointer"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
export default MyPostWidget;
