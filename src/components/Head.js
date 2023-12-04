import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
        />

        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTas9ZerN0eVpHSiZomHonwW3s8kjfrQy2aajkQRNWU&s"
        />
      </div>
    </div>
  );
};

export default Head;
