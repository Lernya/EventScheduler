import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
// import AComponent from './components/AComponent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='event' element={<EventDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <div id="app">

  //     <div title="TestDIV" className="text-center">
  //       <h1 title="TailwindCSS" className='bg-amber-300 p-4 text-6xl'>Event Scheduler</h1>
  //       <h2 title="TailwindCSS" className='text-3xl m-2'>Terminplaner</h2>
  //       <button className="btn btn-primary">Button mit DaisyUI</button>
  //     </div>

  //   </div>
  // )
}

export default App

