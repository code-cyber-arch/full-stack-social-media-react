import NavigationCard from "./NavigationCard";
import React from "react";

const Layout = ({ children, hideNavigation }) => {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-3/4";
  }
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 sm:mb-0">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-1/4 -mb-5">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
};

export default Layout;
