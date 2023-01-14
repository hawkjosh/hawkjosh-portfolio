import React, { useState } from 'react'
import '../assets/styles/Menus.css'

import menu from '../assets/images/menu.svg'

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const menuOptions = ['Home', 'About', 'Work Samples', 'Contact', 'Resume']
  
  return (
    <>
      <div className='menu-dropdown'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <svg width="32" height="32" viewBox="0 0 110 110">
            <path className='menu-icon' fill="white" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d=" M 15 15H 95A 5 5 0 0 1 95 25H 15A 5 5 0 0 1 15 15ZM 15 50H 95A 5 5 0 0 1 95 60H 15A 5 5 0 0 1 15 50ZM 15 85H 95A 5 5 0 0 1 95 95H 15A 5 5 0 0 1 15 85Z"/>
          </svg>
        </button>
        {showMenu && (
          <ul className='menu-list'>
            {menuOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}