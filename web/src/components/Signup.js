import React, { useState } from 'react'

import { Link, navigate } from '@redwoodjs/router'

import { useAuth } from '@redwoodjs/auth'

import { UserAuth } from 'src/context/AuthContext'

import { Form } from '@redwoodjs/forms'

const Signup = () => {

    // firebase
    const { loading, isAuthenticated, logIn, logOut } = useAuth()
    if (loading) {
      return null
    }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser } = UserAuth()

  const handleSubmit = async (e) => {
    // e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }



  return (
    <div className="pb-54 flex h-screen w-screen flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col items-center p-3">

          <div className="my-4 flex h-48 w-48 flex-col justify-center rounded-full bg-black text-center text-4xl text-white">
            Logo
            <h2 className="text-xl">21-28</h2>
          </div>

      <div>
        <h1 className='text-center text-3xl font-bold py-2'>Registrieren</h1>

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
                  {loading ? <h1>Loading</h1> : <h1><p>Registrieren</p> <p>Email & Passwort</p></h1>}
                </button>
              </div>
            </Form>
    </div>
    </div>
    </div>
  )
}

export default Signup
