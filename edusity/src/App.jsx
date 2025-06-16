import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/programs/programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {

 

  return (
    <div>
      <Navbar/> 
      <Hero />
      <div className="container">
        <Title subTitle = "Our PROGRAMS" Title = "What We offer" />
        <Programs />
         <About />
         <Title subTitle = "Gallery" Title = "Campus Photos" />
         <Campus /> 
          <Title subTitle = "Testimonials" Title = "What Student Says" />
          <Testimonials />
          <Title subTitle = "contact us" Title = "Get In Touch" />
          <Contact />
          <Footer />
      </div>
      
    </div>
  )
}

export default App
