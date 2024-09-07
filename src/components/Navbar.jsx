import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='flex gap-3'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/event'>Event</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to='/signin'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
