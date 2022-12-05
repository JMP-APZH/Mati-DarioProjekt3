// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import Signup from './components/Signup'
import GeneralLayout from './layouts/GeneralLayout/GeneralLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={Signup} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />

      <Set private unauthenticated="login">
        <Set wrap={GeneralLayout}>
          <Route path="/luckywheel" page={LuckywheelPage} name="luckywheel" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
