import React from "react";

const UserImage = ({ image }) => {
  return (
    <div>
      <img
        class="h-16 w-16 rounded-full"
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
      ></img>
    </div>
  );
};

export default UserImage;
