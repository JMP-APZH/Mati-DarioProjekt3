import { Helmet } from 'react-helmet'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

import { MetaTags } from '@redwoodjs/web'

// import Account from 'src/components/Account'
// import Auth from 'src/components/Auth'

import { UserAuth } from 'src/context/AuthContext'

import shareVideo from '-!file-loader!./share.mp4'

const HomePage = () => {

  const {user, logout} = UserAuth()

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

      <div className="md:flex md:h-screen md:justify-around md:bg-gradient-to-r md:from-yellow-500 md:to-blue-500 flex-col p-2 text-white">
        <div className="flex h-full w-full items-stretch p-4">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            // className="flex h-screen sm:h-full sm:w-full md:h-2/3 md:w-full"
          />

          <div className="bg-blackOverlay absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
            <p className='pb-8'>Hoi {user && user.email} ! Wie Got's </p>
            <div className="solid rounded-full border p-4 text-center text-2xl hover:bg-yellow-500">
              <button className="rounded-full bg-black p-3">
                {/* <Link to={routes.luckywheel()}>Zum Glücksrad</Link> */}
              </button>
            </div>
            <div>
              <button onClick={handleLogout}>Ausloggen</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage
