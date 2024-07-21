import React from 'react'
import Navigation from './Navigation/nav'
import Dashboard from './Dashboard/dashboard'
import Experience from './Experience/experience'
import Project from './Project/project'
import Technology from './Technology/technology'
import Contact from './Contact/contact'
import Footer from './Footer/footer'

function App() {
  return (
    <div id='App'>
      <Navigation />
      <Dashboard />
      <Experience />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


