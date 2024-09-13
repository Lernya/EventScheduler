import { useEffect, useState } from 'react';     // =
import { useParams } from 'react-router-dom';   // fuer id als Parameter
import { Link } from 'react-router-dom';
import Header2 from './../components/Header2'; 

// nowTimeInEnglishUnitTimezone()

const EventDetails = () => {

  console.log("Check, 1. Zeile unter const EventDetails");

const { eventid } = useParams();
//const  eventid = 2;

const [event, setEvent] = useState(null);

const [status, setStatus] = useState('loading'); // "loading", "success", "error"




useEffect(() => {
  // const controller = new AbortController();
  
  const fetchEvent = async () => {
    try {
      // console.log("Check, fetchEvents");
      setStatus('loading');
      // const res = await fetch(`http://localhost:3001/api/events/${id}`, { signal: controller.signal });
      const res = await fetch(import.meta.env.VITE_API_URL + `/api/events/${eventid}`);   // URL mit http, nicht https!! :-/
      
      if (!res.ok) throw Error('Fetching failed');
      
      const data = await res.json();
      setStatus('success');
      setEvent(data);
      console.log("Ergebnis in event", data);
      
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  
  fetchEvent();
  
  //    return () => controller.abort();
}, [eventid]);
console.log(event);

return (
      <>
   
      <Header2 />
      <div id="event">
        
        {event ? (
        <div className="card glass max-w-xl mx-auto -mt-24  ">
            <div className="card-body">
              <p className='text-right'></p>

              <p className='text-left card-title font-extrabold '>📅 &nbsp; 
                {new Date(event.date).toLocaleDateString('en-GB', { 
                  weekday: 'long',
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })} </p>
              <p className='text-left'>🕔 &nbsp; 
                {new Date(event.date).toLocaleTimeString('en-GB', { 
                  hour: 'numeric', 
                  minute: 'numeric', 
                  timeZone: 'Europe/Berlin', 
                  hourCycle: 'h23' 
                })}h
                </p>
  
                    <p className='text-right'>{event.location} 🔻</p>
                    <p className="text-right text-xs"><a href={`https://www.openstreetmap.org/#map=16/${event.latitude}/${event.longitude}`}>{event.latitude} | {event.longitude} 🧭</a></p>

                    <h3 className='card-title font-extrabold text-3xl mt-6'>{event.title}</h3>
                    <p>{event.description}</p>

                    {/* <div className='flex justify-center'>
                    <div className='flex flex-col'>
                    <iframe width="425" height="350" 
                    src={`https://www.openstreetmap.org/export/embed.html?bbox={event.latitude}%2C{event.longitude}%2C{event.latitude}%2C{event.longitude}&amp;layer=mapnik&amp;marker={event.longitude}%2C{event.latitude}`} 
                    className="border"></iframe><br/>
                    <small><a href={`https://www.openstreetmap.org/?mlat={event.latitude}&amp;mlon={event.longitude}#map=16/{event.latitude}/{event.longitude}`}>Größere Karte anzeigen</a></small>
                    </div>
                    </div> */}

                                        
                    <div className='flex justify-center mt-12'>
                      <div className='flex flex-col'>
                        <iframe width="425" height="350"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${event.longitude}%2C${event.latitude}%2C${event.longitude}%2C${event.latitude}&amp;layer=mapnik&amp;marker=${event.latitude}%2C${event.longitude}`}
                        className="border"></iframe><br/>
                        <small><a href={`https://www.openstreetmap.org/?mlat=${event.latitude}&amp;mlon=${event.longitude}#map=16/${event.latitude}/${event.longitude}`}>View Larger Map</a></small>
                      </div>
                    </div>

                    {/* <div className='flex justify-center mt-12'>
                      <div className='flex flex-col'>
                        <iframe width="425" height="350"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=7.119588553905488%2C50.70637188152956%2C7.122209072113038%2C50.707640740258206&amp;layer=mapnik&amp;marker=50.70700631518635%2C7.120898813009262"
                        className="border"></iframe><br/>
                        <small><a href="https://www.openstreetmap.org/?mlat=50.707006&amp;mlon=7.120899#map=16/50.707006/7.120899">View Larger Map</a></small>
                      </div>
                    </div> */}




                    <h2 className="text-right mt-20 text-bold text-xs text-gray-400">Event {event.id}</h2>
              <div className="card-actions justify-end">
              {/* <Link to={`/`}>
              <button id="event-to-start" className="btn btn-primary">Zur Übersicht</button>
              </Link> */}
            </div>
          </div>
        </div>
      
    
        
         ) : (
          <p>Keine Eventdetails vorhanden.</p>
        )}

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
     </>
  );
};
  
  export default EventDetails;
  