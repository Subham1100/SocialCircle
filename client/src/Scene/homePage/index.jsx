import React from "react";
import NavBar from "Scene/navBar";
import { useSelector } from "react-redux";
import UserWidegets from "Scene/widgets/UserWidgets";
import MyPostWidget from "Scene/widgets/MyPostWidgets.jsx";
import PostsWidgets from "Scene/widgets/PostsWidgets.jsx";
import FriendListWidget from "../widgets/FriendList.jsx";

const HomePage = () => {
  const mode = useSelector((state) => state.mode);

  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div class={`theme-${mode} bg-background-alt`}>
      <NavBar mode={mode} />
      <div class="flex">
        <div class="w-1/4 p-5 ">
          <UserWidegets userId={_id} picturePath={picturePath} />
        </div>
        <div class="w-2/4 flex flex-col gap-5 p-5">
          <MyPostWidget picturePath={picturePath} />

          <PostsWidgets userId={_id} />
        </div>
        <div class="p-5 flex-1">
          <FriendListWidget userId={_id} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
