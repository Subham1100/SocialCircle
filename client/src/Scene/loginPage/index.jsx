import React from "react";
import { useSelector } from "react-redux";
import DarkModeToggle from "Scene/widgets/darkModeToggle";
import Form from "./form";

const LoginPage = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div class={`theme-${mode}  flex flex-col min-h-screen bg-neutral-light`}>
      <div class="bg-background-alt flex justify-center">
        <button class="ml-10 py-4 flex justify-center">
          <p class="text-primary-dark text-4xl font-bold justify-center">
            SocioPedia
          </p>
        </button>
        <div class="pl-11 py-4">
          <DarkModeToggle />
        </div>
      </div>
      <div class="flex justify-center ">
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
