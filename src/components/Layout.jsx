import NavigationCard from "./NavigationCard";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/4">
        <NavigationCard />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
