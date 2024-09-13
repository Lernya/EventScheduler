// src/components/header2.jsx
import React from 'react';
// import { nowTimeInEnglishUnitTimezone } from '../utils/events-localization.js';
import { nowDateInEnglishUnitTimezone } from '../utils/events-localization.js';

const Header2 = () => {
  return (
    <header id="header-seite" className=' shadow-xl flex pt-8'>
      {/* <div className=" bg-base-100 image-full w-auto h-10 shadow-xl"> */}
      {/* <div className=""> */}
        {/* <figure>
          <img
            className="h-60 w-full"
            src="/repository-open-graph-tuerkisblau2408a.png"
            alt=""
          />
        </figure> */}
      <div className="pl-10 text-center flex-none">
        <img className="h-20" src="/calendar_1f4c5.png" alt="Kalender" />
      </div>
      <div className='grow'></div>
            <div className='flex-none'>
            <p className='text-right pr-4 pt-2 text-l font-bold'>It is now 
                {/* <br /> {nowTimeInEnglishUnitTimezone()}
                &nbsp;on */}
                <br /> {nowDateInEnglishUnitTimezone()}
            </p>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header2;
