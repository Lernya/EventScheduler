import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderStart from './../components/HeaderStart';
import '../utils/events-localization.js'

const Home = () => {
  console.log('Check, 1. Zeile unter const Home');
  const [events, setEvents] = useState(null);
  console.log('Events:', events);

  const [status, setStatus] = useState('loading'); // "loading", "success", "error"

  useEffect(() => {
    // fuer Variante mit Controller
    // Um fetch calls abzubrechen. Nötig bei schneller Veränderung von State.
    // const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        // console.log(events); //
        console.log('Check, fetchEvents');

        const res = await fetch(import.meta.env.VITE_API_URL + '/api/events'); // URL mit http, nicht https!! :-/

        setStatus('loading');
        // const response = await fetch('import.meta.env.VITE_API_URL + "/api/events/{id}', { signal: controller.signal });

        // Klappt die Verbindung? Gibt es "response"?
        if (!res.ok) throw new Error('failed to fetch events');
        // Wenn es klappt, Schritt 1: Daten in die Variable data packen, passend formatiert:
        const data = await res.json();
        console.log('data-Variable:', data); // ok

        setStatus('success');
        setEvents(data.results);
        console.log('Ergebnis in events', events);
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };
    fetchEvents();

    // // fuer Variante mit Controller
    //   return () => controller.abort();
  }, []);

  // Nach dem erfolgreichen Fetchen nun die Ausgabe...
  // return ();
  // darein Schritt1: umschließendes Element //  <div id="events" title="Home"></div>
  // dort dann Schritt2: Schleife mit conditional rendering nicht vergessen! Bei api/events mit Array-Längenabfrage: { events && events.length > 0 ? () : () }  Bei api/events${eventid} ohne Längenabfrage, Ergebnis ist kein Array

  return (
    <div id="events" className="mx-auto mb-40">
      {
        // <!-- Hier dann die Schleife -->
      }
      <HeaderStart />

      {events && events.length > 0 ? (
        <div className="p-8 flex justify-center">
          <ul className="mt-10 flex flex-col">
            {events.map((event) => (
              <Link
                to={`event/${event.id}`}
                key={'event-' + event.id}
                className="card bg-base-100 w-96 shadow-xl my-1 hover:bg-white"
              >
                <li className="px-8 py-4">
                  <p className="text-right">
                   <strong>{new Date(event.date).toLocaleDateString()}</strong>
                  </p>
                  <p className="text-right">{event.location}</p>
                  <h3 className="font-extrabold text-xl">{event.title}</h3>
                  <p>{event.description}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <p>Keine Events vorhanden.</p>
      )}

      <section className='mt-10 w-full flex justify-center'>
        <div className=' flex flex-col w-full'>
          <div className="text-6xl text-center">📝</div>
          <div  className="text-center m-3">
            {/* // Add Event Button */}
            <Link to="/protected">
              {/* <button id="btn-add-event" className="fixed bottom-8 right-8 btn btn-active btn-neutral"> */}
              {/* <button id="btn-add-event" className="btn btn-active btn-neutral w-96"> */}
                <button className='btn btn-active btn-neutral w-96 text-xl h-16 hover:bg-[#058a0a] hover:border-[#047008]'>
                + Add Event
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
