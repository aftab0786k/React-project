import React from 'react'

const Sidebar = () => {
  return (
    <div className ='h-screen w-64 bg-black text-white p-6 fixed top-0 left-0'>
    <div >
        <h2 classname ='text-2xl font-bold mb-6'>Brooklyn Alice</h2>
        <ul className ='space-y-4'>
          <li className ='hover:text-gray-400 cursor-pointer'>Dashboard</li>
          <li>Analytics</li>
          <li> Sales</li>
        </ul>
    </div>
    <div>
        <h3>PAGES</h3>
        <ul>
            <li>pages</li>
            <li>Application</li>
            <li>Ecommrce</li>
            <li>Authantication</li>
        </ul>
    </div>
    <div>
        <li>Basic</li>
        <li>Componets</li>
    </div>
    </div>
  )
}

export default Sidebar