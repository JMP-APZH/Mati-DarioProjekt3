import React, { useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { SiAddthis } from 'react-icons/si'
import { TfiCalendar } from 'react-icons/tfi'
import { TfiCommentsSmiley } from 'react-icons/tfi'

import { useAuth } from '@redwoodjs/auth'
import { firebase } from '@redwoodjs/auth/dist/authClients/firebase'
import { Link, navigate, routes } from '@redwoodjs/router'

import MenuItems from 'src/components/MenuItems'

const GeneralLayout = ({ children }) => {
  const [active, setActive] = useState(false)

  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  if (loading) {
    return null
  }

  const showMenu = () => {
    setActive(!active)
    console.log('from showMenu')
  }

  // const activePage = window.location.pathname;
  // console.log(activePage);
  // const navLinks = document.querySelectorAll('nav li').forEach(link => {
  //   console.log(link.to)
  // }

  return (
    <>
      <div className="flex h-screen flex-col justify-between bg-gradient-to-r from-yellow-500 to-blue-500">
        <header className="">
          <div className="flex flex-col justify-center bg-yellow-500">
            <div className="flex flex-row justify-between p-2">
              <h1 className="pr-18 pl-10 text-center text-3xl font-bold text-black">
                Matijanas & Darios App
              </h1>
              <div className="z-20 mr-10 scale-150 pt-3 pl-5 pb-2 md:hidden">
                <AiOutlineMenu
                  className={active ? 'hidden' : 'scale-150 cursor-pointer'}
                  onClick={showMenu}
                />
              </div>
            </div>

            {/* <div className="">
              <div className="md:h-54 sm:h-36 flex h-24 w-screen items-center bg-hero-image bg-cover bg-center px-4 text-red-700"></div>
            </div> */}

            <div className="flex flex-row items-center justify-between bg-gradient-to-r from-green-500 to-cyan-500">
              <div className="logo flex text-left font-bold">
                <h1 className="">
                  <p className="bg-blue-500 text-red-500">
                    {' '}
                    Projekt Name / Logo{' '}
                  </p>
                </h1>
              </div>

              <div className="relative flex justify-between font-bold">
                <nav className="">
                  <ul className="scale-115 hidden gap-6 p-6 uppercase md:flex">
                    <li className="cursor-pointer">
                      <Link
                        className="solid rounded-md border-black p-1 hover:border hover:bg-yellow-500"
                        to={routes.home()}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link
                        className="solid rounded-md border-black p-1 hover:border hover:bg-yellow-500"
                        to={routes.luckywheel()}
                      >
                        Glücksrad
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link
                        className="solid rounded-md border-black p-1 hover:border hover:bg-yellow-500"
                        to={routes.login()}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link
                        className="solid rounded-md border-black p-1 hover:border hover:bg-yellow-500"
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

                  <MenuItems showMenu={showMenu} active={active} />
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* w-full-h md:h-96 md:w-96 relative flex items-center */}
        <main className="relative">{children}</main>

        <footer className="relative bg-black text-yellow-500">
          <div className="flex flex-col justify-between">
            <ul className="scale-115 flex flex-row items-center justify-around gap-8 p-3 text-center uppercase md:flex">
              <li className="solid flex h-20 w-20 cursor-pointer flex-col items-center rounded-md border-yellow-500 pt-4 hover:border">
                <Link
                  className="flex flex-col items-center gap-1"
                  to={routes.home()}
                >
                  <TfiCalendar className="text-2xl" />
                  Planen
                </Link>
              </li>

              <li className="solid flex h-20 w-20 cursor-pointer flex-col items-center rounded-md border-yellow-500 pt-4 hover:border">
                <Link
                  className="flex flex-col items-center gap-1"
                  to={routes.luckywheel()}
                >
                  <SiAddthis className="text-2xl" />
                  Spontan
                </Link>
              </li>
              <li className="solid flex h-20 w-20 cursor-pointer flex-col items-center rounded-md border-yellow-500 pt-4 hover:border">
                <Link className="flex flex-col items-center gap-1" to="">
                  <TfiCommentsSmiley className="text-2xl" />
                  Chat
                </Link>
              </li>
            </ul>
            <p className="text-center text-xs">Made by JMP with RedwoodJS</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default GeneralLayout
