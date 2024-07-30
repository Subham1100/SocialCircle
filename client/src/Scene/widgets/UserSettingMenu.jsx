import React from "react";
import WidgetWrapper from "../../components/widgetWrapper.jsx";
const UserSettingMenu = () => {
  return (
    <WidgetWrapper>
      <div class="flex flex-col justify-evenly gap-3">
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Basic Info
        </button>
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Privacy Settings
        </button>
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Account Security
        </button>
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Activity Log
        </button>
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Contact Information
        </button>
        <button class="p-3 bg-gray-300 hover:bg-gray-400 text-left rounded-lg ">
          Deactivate Account
        </button>
      </div>
    </WidgetWrapper>
  );
};
export default UserSettingMenu;
