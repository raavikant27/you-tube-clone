import React from "react";
import ButtonList from "./ButtonList";
import VedeoContainer from "./VedeoContainer";

function MainContainer() {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VedeoContainer />
    </div>
  );
}

export default MainContainer;
