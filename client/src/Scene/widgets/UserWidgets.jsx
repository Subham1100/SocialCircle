import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserImage from "components/UserImage";
import WidgetWrapper from "components/widgetWrapper";

const UserWidegets = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      <div class="gap-3">
        {/* FIRST ROW */}
        <div class="border-b-2 p-2 border-black">
          <button onClick={() => navigate(`/profile/${userId}`)}>
            <UserImage image={picturePath} width="50" height="50" />
            <div class="grid grid-flow-col gap-4 ">
              <p class="text-neutral-dark font-bold ">
                {firstName} {lastName}
              </p>
              <p class="text-neutral-dark">{friends.length} friends</p>
            </div>
          </button>
        </div>

        {/* SECOND ROW */}
        <div class="border-b-2 border-l-2 p-2 border-black">
          <div class="flex gap-3 ">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p class="text-neutral-dark ">{location}</p>
          </div>

          <div class="flex gap-3">
            <svg
              class="text-neutral-dark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
                fill="currentcolor"
              />
            </svg>
            <p class="text-neutral-dark">{occupation}</p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div class="border-b-2 border-l-2 p-2 border-black">
          <div class="flex gap-3 text-neutral-dark">
            <p>Who's viewed your profile</p>
            <p>{viewedProfile}</p>
          </div>
          <div class="flex gap-3 text-neutral-dark">
            <p>Impressions of your post</p>
            <p>{impressions}</p>
          </div>
        </div>

        {/* FOURTH ROW */}
        <div class=" flex flex-col gap-3 border-b-2 border-l-2 p-2 border-black ">
          <div>
            <p class="text-neutral-dark font-bold">Social Profiles</p>
          </div>

          <div>
            <div class="flex gap-3">
              <div>
                <img
                  src={`http://localhost:3001/assets/linkedin.png`}
                  alt="twitter"
                />
              </div>

              <div class="text-neutral-dark">
                <p>Linkedin</p>
                <p>Network Platform</p>
              </div>
              <div class="flex flex-1 justify-end">
                <svg
                  class="h-4 w-4 text-neutral-dark"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <div>
              <img
                src={`http://localhost:3001/assets/twitter.png`}
                alt="linkedin"
              />
            </div>

            <div class="grid grid-col text-neutral-dark">
              <p>Twitter</p>
              <p>Social Network</p>
            </div>
            <div class="flex flex-1 justify-end">
              <svg
                class="h-4 w-4 text-neutral-dark"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default UserWidegets;
