import { useEffect, useState } from 'react';

const Home = () => {

  console.log("Check, 1. Zeile unter const Home");
  const [events, setEvents] = useState(null);
  console.log("Events:", events);

  // fuer Variante mit Controller
  // const [status, setStatus] = useState('loading'); // "loading", "success", "error"


  useEffect(() => {

    // fuer Variante mit Controller
    // Um fetch calls abzubrechen. Nötig bei schneller Veränderung von State.
    // const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        // console.log(events); // 
        console.log("Check, fetchEvents");
        
        
        const res = await fetch('http://localhost:3001/api/events');   // URL mit http, nicht https!! :-/
        // fuer Variante mit Controller
        // setStatus('loading');
        // const response = await fetch('https://localhost:3001/api/events/{id}', { signal: controller.signal });

        // Klappt die Verbindung? Gibt es "response"?
        if (!res.ok) throw new Error('failed to fetch events');
        // Wenn es klappt, Schritt 1: Daten in die Variable data packen, passend formatiert:
        const data = await res.json();
        console.log("data-Variable:", data); // ok
       
        // Variante mit Controller
        // setStatus('success');

        // Schritt 2: Mit Daten aus der Variablen den State von events aktualisieren (hier von leer auf Inhalt)
        // WICHTIG: HIER ist die Stelle, wo das "foo.results" hinkommt, das bei der REST-API im Objekt untergeordnet ist!!!!
        setEvents(data.results);
        console.log(events);

      } catch (error) {
      console.error(error);
        // setStatus('error');
      }
    };
    fetchEvents();

    // // fuer Variante mit Controller
    //   return () => controller.abort();

  }, []);

  // Okay, also fetchen geht. Bis hierhin. Nur die Ausgabe fehlt.
  // return ();
  // darein Schritt1: umschließendes Element //  <div id="events" title="Home"></div>


 return (
  <div id="events" title="Home">
    { // <!-- Hier dann die Schleife --> 
    } 
            <div className=' bg-base-100 image-full w-auto h-10 shadow-xl'>
                   <figure>
                    <img className="h-60 w-full" src="repository-open-graph-tuerkisblau2408a.png" alt='Ein Bild' />
                  </figure> 
            </div>
            <div className="pl-10 text-center">
              {/* <img className="h-40" src="woman-technologist_1f469-200d-1f4bb.png" alt='Ein Bild' /> */}
              <img className="h-40" src="calendar_1f4c5.png" alt='Ein Bild' />
            </div>

                  {events && events.length > 0 ? (
      <div className='p-8 mx-auto'>
        <ul className="mt-10">
          {events.map((event) => (
            <li className='px-8 py-4' key={event.id}>
              <p><strong>Datum:</strong> <strong>{new Date(event.date).toLocaleDateString()}</strong></p>
              <h3 className='font-extrabold text-xl'>{event.title}</h3>
              <p>{event.description}</p>
            </li>
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
  