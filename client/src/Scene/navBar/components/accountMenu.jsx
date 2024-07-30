import React from "react";
import { setLogout } from "state/slices";
import { useDispatch } from "react-redux";

const AccountMenu = () => {
  const dispatch = useDispatch();
  return (
    <div class="flex flex-col gap-2">
      <button class="border-gray-400 bg-neutral-light border-2 p-2 rounded-2xl text-neutral-main ">
        Profile
      </button>
      <button class="border-gray-400 bg-neutral-light border-2 p-2 rounded-2xl text-neutral-main ">
        Settings
      </button>
      <button
        onClick={() => dispatch(setLogout())}
        class="border-gray-400 bg-neutral-light border-2 p-2 rounded-2xl text-neutral-main "
      >
        Logout
      </button>
    </div>
  );
};

export default AccountMenu;
