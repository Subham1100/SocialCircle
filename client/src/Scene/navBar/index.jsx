import React from "react";
import SearchBar from "./components/searchBar";
import UserMenu from "./components/userMenu";
import AccountMenu from "./components/accountMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const NavBar = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.firstName);
  return (
    <div class="flex border-4 py-4">
      <button onClick={() => navigate("/home")} class="ml-10">
        <p class="text-primary-dark text-4xl font-bold">SocialCircle</p>
      </button>

      <div class="pl-5 ">
        <SearchBar mode={mode} />
      </div>
      <div class="pl-72 ">
        <UserMenu mode={mode} />
      </div>
      <div className="pl-24">
        <button
          onClick={ToggleMenu}
          class="border-primary-light border-2 rounded-3xl p-2 bg-primary-dark shadow-primary-dark shadow-sm"
        >
          <p class="text-primary-light">{name}</p>
        </button>
        {isOpen && (
          <div class="absolute mt-3">
            <AccountMenu mode={mode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
