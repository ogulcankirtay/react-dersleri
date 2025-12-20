import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import EmployeeAbout from './EmployeeAbout'

function About() {
  return (
    <div><h1>About</h1>
      <Link to="employee">Çalışan Hakkında</Link>
      <Link to="company">Şirket Hakkında</Link>

      <Outlet/>
    </div>

  )
}

export default About