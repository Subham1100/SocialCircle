import React from "react";
import NavBar from "Scene/navBar";
import { useSelector } from "react-redux";
import UserWidegets from "Scene/widgets/UserWidgets";
import MyPostWidget from "Scene/widgets/MyPostWidgets.jsx";
import PostsWidgets from "Scene/widgets/PostsWidgets.jsx";
import FriendListWidget from "../widgets/FriendList.jsx";
import UserSettingMenu from "Scene/widgets/UserSettingMenu.jsx";

const ProfilePage = () => {
  const mode = useSelector((state) => state.mode);
  const { _id } = useSelector((state) => state.user);
  return (
    <div class={`theme-${mode} bg-background-alt`}>
      <NavBar mode={mode} />
      <div class="flex">
        <div class="w-1/4 p-5 ">
          <UserSettingMenu />
        </div>
        <div class="w-2/4 flex flex-col gap-5 p-5">
          <PostsWidgets userId={_id} isProfile={true} />
        </div>
        <div class="p-5 flex-1">
          <FriendListWidget userId={_id} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
