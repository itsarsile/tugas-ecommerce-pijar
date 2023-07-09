/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { TbShoppingCart, TbBell, TbMail } from 'react-icons/tb'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import LogoComponent from '../Logo/Logo'

const Navbar = () => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <div className="bg-base-300">
      <div className="navbar mx-auto p-3 lg:max-w-7xl">
        <div className="flex-1">
          <LogoComponent className="w-24" />
        </div>
        <div className="flex-none gap-3">
          {isAuthenticated ? (
            <>
              <TbMail />
              <TbBell />
              <TbShoppingCart />
              <div className="dropdown-end dropdown">
                <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-300 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={logOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to={routes.login()} className="btn-neutral btn-outline btn">
                Login
              </Link>
              <Link
                to={routes.signup()}
                className="btn-neutral btn-outline  btn"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
