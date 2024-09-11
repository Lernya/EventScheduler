import { useEffect, useState } from 'react';     // =
import { useParams } from 'react-router-dom';   // fuer id als Parameter
import { Link } from 'react-router-dom';


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
      <div id="event">
        {/* <h1>Event</h1> */}
        {/* Momentan default w-96 maximum. siehe Tailwind-Doku bei max-width  */}
        {event ? (
        <div class="card glass w-96 mx-auto">
          <figure>
            <img
              src="repository-open-graph-tuerkisblau2408a.png"
              alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{event.id}</h2>
              <p className='text-right'><strong>Datum:</strong> <strong>{new Date(event.date).toLocaleDateString()}</strong></p>
                    <p className='text-right'>{event.location}</p>
                    <h3 className='font-extrabold text-xl'>{event.title}</h3>
                    <p>{event.description}</p>
              <div class="card-actions justify-end">
              <Link to={`/`}>
              <button class="btn btn-primary">Zur Übersicht</button>
              </Link>
            </div>
          </div>
        </div>
         ) : (
          <p>Keine Eventdetails vorhanden.</p>
        )}
     </div>
  );
};
  
  export default EventDetails;
  