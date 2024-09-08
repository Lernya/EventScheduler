import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from './pages/EventDetails';
import AddEvent from "./pages/AddEvent";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";


function App() {

    // Define Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='event' element={<EventDetails />} />
        <Route path="login" element={<SignIn />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="protected" element={<ProtectedLayout />}>
          <Route index element={<AddEvent />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;

  //     <div title="TestDIV" className="text-center">
  //       <h1 title="TailwindCSS" className='bg-amber-300 p-4 text-6xl'>Event Scheduler</h1>
  //       <h2 title="TailwindCSS" className='text-3xl m-2'>Terminplaner</h2>
  //       <button className="btn btn-primary">Button mit DaisyUI</button>
  //     </div>

  //   </div>
  // )
}

export default App;
