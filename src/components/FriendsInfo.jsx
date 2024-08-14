import React from "react";
import Avatar from "./Avatar";

const FriendsInfo = () => {
  return (
    <div className="flex gap-2">
      <Avatar />
      <div>
        <h3 className="font-semibold text-xl">Abdu Mah</h3>
        <div className="text-sm leading-4">5 mutual friends</div>
      </div>
    </div>
  );
};

export default FriendsInfo;
