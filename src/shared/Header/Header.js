import { Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleThemeToggle = () => {
    setToggle(!toggle);
  }

  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(e => console.error(e))
  }

  return (
    <div className='py-2'>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand >
          <Link to='/'>
            <div className='flex flex-row'>
            <img
              src="data:image/png;base64,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"
              className="h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              WANDERLUST
            </span>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
          >
            <NavLink to='/' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#ffffff',
              padding: isActive ? '8px 20px' : '0px',
              borderRadius: isActive ? '20px' : '0px'
            })}>Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to='/blog' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#ffffff',
              padding: isActive ? '8px 20px' : '0px',
              borderRadius: isActive ? '20px' : '0px'
            })}>Blog</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to='/services' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#ffffff',
              padding: isActive ? '8px 20px' : '0px',
              borderRadius: isActive ? '20px' : '0px'
            })}>Services</NavLink>
          </Navbar.Link>
          {!user ?
            <>
              <Navbar.Link>
                <NavLink to='/login' style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#7600dc' : '#ffffff',
                  padding: isActive ? '8px 20px' : '0px',
                  borderRadius: isActive ? '20px' : '0px'
                })}>Login</NavLink>
              </Navbar.Link>
              <Navbar.Link>
                <NavLink to='/register' style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#7600dc' : '#ffffff',
                  padding: isActive ? '8px 20px' : '0px',
                  borderRadius: isActive ? '20px' : '0px'
                })}>Register</NavLink>
              </Navbar.Link>
            </>
            :
            <>
              <Navbar.Link>
                <NavLink to='/myReviews' style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#7600dc' : '#ffffff',
                  padding: isActive ? '8px 20px' : '0px',
                  borderRadius: isActive ? '20px' : '0px'
                })}>My reviews</NavLink>
              </Navbar.Link>
              <Navbar.Link>
                <NavLink to='/add-service' style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#7600dc' : '#ffffff',
                  padding: isActive ? '8px 20px' : '0px',
                  borderRadius: isActive ? '20px' : '0px'
                })}>Add service</NavLink>
              </Navbar.Link>
              <Navbar.Link onClick={handleLogout}>
                {/* <Button size="xs" outline={true} pill={true} gradientDuoTone="purpleToBlue">logout</Button> */}
                <span className='bg-slate-400 px-2 py-2 rounded-3xl cursor-pointer hover:text-white'>logout</span>
              </Navbar.Link>
              <Navbar.Link className="ml-2">
                <Tooltip content={user?.displayName}
                  placement="left">
                  <div data-tip={user?.displayName}>
                    <img className='w-6 rounded-full' src={user?.photoURL ? user?.photoURL : ''} alt='' />
                  </div>
                </Tooltip>
              </Navbar.Link>
            </>
          }


        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;