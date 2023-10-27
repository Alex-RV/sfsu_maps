import React from 'react'

export default function home() {
  return (
    <div id="contol bar" className="w-full bg-violet-700">
      <div id="logo and title" className="flex items-left">
        <img style={{ backgroundImage: `url('./public/assets/gator_logo.png')`, width: '30px', height: '30px' }} className="ml-4"/>
        <div id ="title" className="ml-4">SFSU_Maps</div>
        </div>
    </div>
  )
}
