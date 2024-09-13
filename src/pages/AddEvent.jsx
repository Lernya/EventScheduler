//import { useEffect, useState } from 'react';     // =
//import { useParams } from 'react-router-dom';   // fuer id als Parameter
import { Link } from 'react-router-dom';
import Header2 from './../components/Header2'; 


const AddEvent = () => {
  return (
  <div id="add-event">
      <Header2 />

      <section className='flex justify-center mt-24'>

        <div id="form" className='border-2 border-blue-900 rounded-xl h-96 flex flex-col  p-16 text-center pt-32 '>
          <p className='text-blue-900 text-xl'>Bald siehst du hier <br />ein wunderschönes Formular. 
         </p>
        </div>

      </section>

      <section className='mt-10 w-full flex justify-center mb-24'>
        <div className=' flex flex-col w-full'>
          <div className="text-6xl text-center">📄</div>
          <div  className="text-center m-3">
            {/* // Add Event Button */}
            <Link to="/">
              {/* <button id="btn-add-event" className="fixed bottom-8 right-8 btn btn-active btn-neutral"> */}
              {/* <button id="btn-add-event" className="btn btn-active btn-neutral w-96"> */}
                <button className='btn btn-active btn-neutral w-96 text-xl h-16 hover:bg-[#058a0a] hover:border-[#047008]'>
                Go to Overview
              </button>
            </Link>
          </div>
        </div>
      </section>


  </div>
  );
};

export default AddEvent;
