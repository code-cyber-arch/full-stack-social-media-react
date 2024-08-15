import React from "react";

const Avatar = ({ size }) => {
  let width = "w-12";
  let hight = "h-12";

  if (size === "lg") {
    width = "w-36";
    hight = "h-36";
  }
  return (
    <div
      className={`${width} ${hight} rounded-full overflow-hidden border-4 border-white`}
    >
      <a href="/profile">
        <img src="https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </a>
    </div>
  );
};

export default Avatar;
