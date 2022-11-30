import { useState } from 'react'

// import * as firebaseui from 'firebaseui'
// import { Magic } from 'magic-sdk'

import { useAuth } from '@redwoodjs/auth'
import { firebase } from '@redwoodjs/auth/dist/authClients/firebase'
import { Form } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { UserAuth } from './../../context/AuthContext'

// import firebase from 'firebase/compat/app';
// import 'firebaseui/dist/firebaseui.css'

// import './LoginPage.css'

// import Account from 'src/components/Account'
// import Auth from 'src/components/Auth'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = UserAuth()

  // firebase
  const { loading, isAuthenticated, logIn, logOut } = useAuth()
  if (loading) {
    return null
  }

  // const auth = getAuth()

  const handleSubmit = async (e) => {
    // e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }



  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <div className="pb-54 flex h-screen w-screen flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col items-center p-3">

          <div className="my-4 flex h-48 w-48 flex-col justify-center rounded-full bg-black text-center text-4xl text-white">
            Logo
            <h2 className="text-xl">21-28</h2>
          </div>

          <h1 className='text-center text-3xl font-bold py-2'>Anmelden</h1>

        <div className='py-2'>
          <button
            className="pl-6 pr-6 google-btn shadow-[0 3px 4px 0 rgba(0,0,0,.25)] h-10 w-60 rounded-full bg-black"
            onClick={async () => {
              if (isAuthenticated) {
                await logOut()
                // navigate('/')
              } else {
                await logIn()
                navigate('/')
              }
            }}
          >
            <div className="pt-1 flex items-center justify-center google-icon-wrapper absolute h-5 w-5 rounded-sm bg-black">
              <img
                className="google-icon absolute h-4 w-4"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="GoogleIcon"
              />
            </div>
            <p className="bg-black btn-text float-right text-base h-6 w-40 text-white">
              Anmelden mit Google
            </p>
          </button>

        </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                className="w-60 rounded-full bg-black text-center text-white"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-60 rounded-full bg-black text-center text-white"
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="pt-2 text-white">
                <button
                  className="w-60 rounded-full bg-black hover:bg-blue-400"
                  disabled={loading}
                >
                  {loading ? <h1>Loading</h1> : <h1><p>Anmelden</p> <p>Email & Passwort</p></h1>}
                </button>
              </div>
            </Form>

            <Link to='/signup' className='underline'>
            <p className='pt-6'>Jetzt registrieren?</p>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
