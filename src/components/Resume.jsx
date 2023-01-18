import React from 'react'
import '../assets/styles/Resume.css'

export default function Toolbox() {

  return (
    <>

    <section>
      <a className="resume-open-btn" href='https://1drv.ms/b/s!AjbK_Cd8W85egfM7DSjzINlw1ZHZpA' target='_blank' rel='noreferrer'>
        <svg width="48px" height="auto" viewBox="0 0 1024 1024" fill="white">
          <path d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"/>
        </svg>
        <div className='resume-title'>My Resume</div>
      </a>
    </section>

    </>
  )
}