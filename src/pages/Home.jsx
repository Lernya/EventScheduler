import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  console.log("Check, 1. Zeile unter const Home");
  const [events, setEvents] = useState(null);
  console.log("Events:", events);

  const [status, setStatus] = useState('loading'); // "loading", "success", "error"


  useEffect(() => {

    // fuer Variante mit Controller
    // Um fetch calls abzubrechen. Nötig bei schneller Veränderung von State.
    // const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        // console.log(events); // 
        console.log("Check, fetchEvents");
        
        
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/events');   // URL mit http, nicht https!! :-/

        setStatus('loading');
        // const response = await fetch('import.meta.env.VITE_API_URL + "/api/events/{id}', { signal: controller.signal });

        // Klappt die Verbindung? Gibt es "response"?
        if (!res.ok) throw new Error('failed to fetch events');
        // Wenn es klappt, Schritt 1: Daten in die Variable data packen, passend formatiert:
        const data = await res.json();
        console.log("data-Variable:", data); // ok
       
        setStatus('success');
        setEvents(data.results);
        console.log("Ergebnis in events", events);

      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };
    fetchEvents();

    // // fuer Variante mit Controller
    //   return () => controller.abort();

  }, []);

  // Okay, also fetchen geht. Bis hierhin. Nun die Ausgabe...
  // return ();
  // darein Schritt1: umschließendes Element //  <div id="events" title="Home"></div>


 return (
  <div id="events" title="Home" className='mx-auto'>
    { // <!-- Hier dann die Schleife --> 
    } 
            <div className=' bg-base-100 image-full w-auto h-10 shadow-xl'>
                   <figure>
                    <img className="h-60 w-full" src="repository-open-graph-tuerkisblau2408a.png" alt='Ein Bild' />
                  </figure> 
            </div>
            <div className="pl-10 text-center">
              <img className="h-40" src="calendar_1f4c5.png" alt='Ein Bild' />
            </div>

                  {events && events.length > 0 ? (
            <div className='p-8 flex justify-center'>
             <ul className="mt-10 flex flex-col">
                {events.map((event) => (
                  <Link to={`event/${event.id}`} key={'event-' + event.id} className='card bg-base-100 w-96 shadow-xl my-1 hover:bg-white'>
                                 
                  <li className='px-8 py-4'>
                    <p className='text-right'>Datum: <strong>{new Date(event.date).toLocaleDateString()}</strong></p>
                    <p className='text-right'>{event.location}</p>
                    <h3 className='font-extrabold text-xl'>{event.title}</h3>
                    <p>{event.description}</p>
                 </li>
                 </Link>
               ))}
             </ul>
           </div>
   
    ) : (
      <p>Keine Events vorhanden.</p>
    )}
         
  </div>
 );
};
export default Home;
  