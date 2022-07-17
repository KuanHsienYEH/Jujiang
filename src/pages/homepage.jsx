import React from 'react'
import SkillTree from '../components/skilltree/SkillTree'
import About from '../components/about/About'
import WorkingExp from '../components/workingexp/WorkingExp'
import Contact from '../components/contact/Contact'

function homepage(){
  return (
      <>
        <About />
        <SkillTree />
        <WorkingExp />
        <Contact />
      </>
  )
}

export default homepage


