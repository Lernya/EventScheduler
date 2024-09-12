// src/components/headerstart.jsx
import React from 'react';

const HeaderStart = () => {
  return (
    <header id="header-start">
      {/* <!-- div wird noch zu header --> */}
      <div className=" bg-base-100 image-full w-auto h-10 shadow-xl">
        <figure>
          <img
            className="h-60 w-full"
            src="/repository-open-graph-tuerkisblau2408a.png"
            alt=""
          />
        </figure>
      </div>
      <div className="pl-10 text-center">
        <img className="h-40" src="/calendar_1f4c5.png" alt="Kalender" />
      </div>
    </header>
  );
};

export default HeaderStart;
