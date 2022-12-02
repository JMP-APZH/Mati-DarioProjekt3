import React from 'react'

import { AiOutlineCloseSquare } from 'react-icons/ai'

import { useAuth } from '@redwoodjs/auth'
import { firebase } from '@redwoodjs/auth/dist/authClients/firebase'
import { Link, navigate, routes } from '@redwoodjs/router'

const MenuItems = ({ showMenu, active }) => {
  // firebase
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  if (loading) {
    return null
  }

  return (
    <ul
      className={
        active
          ? 'fixed top-0 right-0 z-20 flex h-screen w-56 flex-col items-center justify-center gap-8 bg-black/20 uppercase text-white backdrop-blur-lg md:hidden'
          : 'hidden'
      }
    >
      <AiOutlineCloseSquare
        className="scale-150 cursor-pointer"
        onClick={showMenu}
      />
      <li>
        <Link to={routes.home()}>Home</Link>
      </li>
      <li>
        <Link to={routes.luckywheel()}>Glücksrad</Link>
      </li>
      <li>
        <Link to={routes.login()}>Login</Link>
      </li>
      <li>
        <Link
          onClick={async () => {
            if (isAuthenticated) {
              await logOut()
              navigate('/login')
            } else {
              await logIn()
              navigate('/')
            }
          }}
          to=""
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </Link>
      </li>
    </ul>
  )
}

export default MenuItems
