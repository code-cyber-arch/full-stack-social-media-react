import React from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import { useLocation } from "react-router-dom";
import FriendsInfo from "../components/FriendsInfo";

const Profile = () => {
  const nonActiveTabClasses =
    "flex gap-1 items-center hover:scale-105 hover:text-socialBlue";
  const activeTabClasses =
    nonActiveTabClasses +
    " border-socialBlue border-b-4 text-socialBlue bg-socialBlue/5 p-1 rounded-t-md font-semibold";

  const location = useLocation();
  const pathname = location.pathname;

  const isPosts = pathname.includes("post");
  const isAbout = pathname.includes("/profile/about");
  const isFriends = pathname.includes("friends");
  const isPhotos = pathname.includes("photos");

  const friendsClass = "border-b p-4 -mx-4";
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1701716271532-0593f814b9a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute top-24 left-4">
            <Avatar size={"lg"} />
          </div>

          <div className="p-4 pb-2">
            <div className="ml-40">
              <h1 className=" text-3xl font-bold">Abdu Mah</h1>
              <div className="text-gray-400 leading-4">
                Melbourne, Australia
              </div>
            </div>
            <div className="mt-10 flex gap-5">
              <a
                href="/profile/posts"
                className={isPosts ? activeTabClasses : nonActiveTabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                Posts
              </a>
              <a
                href="/profile/about"
                className={isAbout ? activeTabClasses : nonActiveTabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                About
              </a>
              <a
                href="/profile/friends"
                className={isFriends ? activeTabClasses : nonActiveTabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                Friends
              </a>
              <a
                href="/profile/photos"
                className={isPhotos ? activeTabClasses : nonActiveTabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Photos
              </a>
            </div>
          </div>
        </div>
      </Card>
      {isPosts && <PostCard />}
      {isAbout && (
        <div>
          <Card>
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis maiores sit illum tempore nisi! Obcaecati incidunt
              numquam necessitatibus labore excepturi?
            </p>
            <p className="mb-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis odit, quasi voluptatem velit at et minus sequi dicta eos
              modi ipsa corrupti ullam perspiciatis. Similique.
            </p>
          </Card>
        </div>
      )}
      {isFriends && (
        <div>
          <Card>
            <h2 className="text-3xl font-semibold mb-4">Friends</h2>
            <div className="">
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
              <div className={friendsClass}>
                <FriendsInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
      {isPhotos && (
        <div>
          <Card>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="shadow-md items-center h-28 flex rounded-sm overflow-hidden">
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1618245318763-a15156d6b23c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="shadow-md items-center h-28 flex rounded-sm overflow-hidden">
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1652356978664-4ca4d3bf5e95?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="shadow-md items-center h-28 flex rounded-sm overflow-hidden">
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
