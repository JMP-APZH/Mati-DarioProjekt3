import { Helmet } from 'react-helmet'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

import { MetaTags } from '@redwoodjs/web'

// import Account from 'src/components/Account'
// import Auth from 'src/components/Auth'

import { UserAuth } from 'src/context/AuthContext'

import shareVideo from '-!file-loader!./share.mp4'

const HomePage = () => {
  const { user, logout } = UserAuth()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  // firebase
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  if (loading) {
    return null
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Helmet>
        <title>Matis & Darios Projekt | Home</title>
      </Helmet>

      {/* <div className="sm:flex sm:h-screen sm:w-screen sm:justify-around sm:bg-gradient-to-r sm:from-yellow-500 sm:to-blue-500 flex-col p-2 text-white"> */}
      <div className="flex flex-col p-2 text-white sm:justify-center sm:bg-gradient-to-r sm:from-yellow-500 sm:to-blue-500">
        <div className="flex flex-col items-stretch p-4">
          <div className="">
            <p className="text-center font-bold text-black">
              Hoi {user && user.email} !
            </p>
            <p className="pb-4 text-center font-bold text-black">Wie Got's ?</p>
          </div>
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            // className="flex h-screen sm:h-full sm:w-full md:h-2/3 md:w-full"
          />

          <div className="">
            <div className="bg-blackOverlay absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
              <div className="solid rounded-full border p-4 text-center text-2xl hover:bg-yellow-500">
                <button className="rounded-full bg-black p-3">
                  <Link to={routes.luckywheel()}>Zum Glücksrad</Link>
                </button>
              </div>
              <div>
                <button onClick={handleLogout}>Ausloggen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
