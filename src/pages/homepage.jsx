import React from 'react'
import About from '../components/about/About'
import Work from '../components/work/Work'
import Exp from '../components/exp/Exp'
import Contact from '../components/contact/Contact'

function homepage(){
  return (
      <>
        <About />
        <Exp />
        <Work />
        <Contact />
      </>
  )
}

export default homepage


