import React from "react";

function Sidebar() {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Sports</li>
        <li>Vedeo</li>
        <li>live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch later</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
