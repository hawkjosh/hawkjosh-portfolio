import React from 'react'
import '../assets/styles/Home.css'

import myAvatar from '../assets/images/my-avatar.svg'
import laptop from '../assets/images/laptop.svg'
import family from '../assets/images/family.svg'
import tennessee from '../assets/images/tennessee.svg'

export default function Home() {

  return (
    <>
      <div id='home-container'>
        <div id='home-avatar'>
          <img src={myAvatar} alt='Hawk Avatar' />
        </div>

        <div id='home-descriptors'>
          <div id='home-descriptor-1'>
            <div className='home-descriptor-container'>
              <img className='home-descriptor-image' src={laptop} alt='Laptop Icon' />
              <div className='home-descriptor-text'>Emerging Developer</div>
            </div>
          </div>
          <div id='home-descriptor-2'>
            <div className='home-descriptor-container'>
              <img className='home-descriptor-image' src={family} alt='Family Icon' />
              <div className='home-descriptor-text'>Super Dad/Husband</div>
            </div>
          </div>
          <div id='home-descriptor-3'>
            <div className='home-descriptor-container'>
              <img className='home-descriptor-image' src={tennessee} alt='Tennessee Icon' />
              <div className='home-descriptor-text'>Vol For Life</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}