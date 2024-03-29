import { AuthProvider } from '@redwoodjs/auth'
import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from '@firebase/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import { AuthContextProvider } from './context/AuthContext'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,

}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
    <AuthContextProvider>
      <AuthProvider client={firebaseClient} type="firebase">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
      </AuthContextProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
