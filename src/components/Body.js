import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="flex">
      <MainContainer />
      <Sidebar />
    </div>
  );
}

export default Body;
