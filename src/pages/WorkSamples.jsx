import React from 'react'
import '../assets/styles/WorkSamples.css'
import RightArrowIcon from '../components/page-icons/RightArrowIcon.jsx'
import LeftArrowIcon from '../components/page-icons/LeftArrowIcon.jsx'

export default function WorkSamples() {
  let activeIndex = 0

  const slides = document.getElementsByTagName("article")
  
  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
    
    currentSlide.dataset.status = "after"
    
    nextSlide.dataset.status = "becoming-active-from-before"
    
    setTimeout(() => {
      nextSlide.dataset.status = "active"
      activeIndex = nextIndex
    })
  }

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
    
    currentSlide.dataset.status = "before"
    
    nextSlide.dataset.status = "becoming-active-from-after"
    
    setTimeout(() => {
      nextSlide.dataset.status = "active"
      activeIndex = nextIndex
    })
  }
  
  return (
		<>
			<main id='work-samples'>
				<article data-index='0' data-status='active'>
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Social Network</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>An efficient and polished full-stack social network app that uses React.js on the client-side with Tailwind frameworks for styling. The server-side is built with Express.js including MongoDB as the ODM, GraphQL for runtime API's, and JWT for authentication.</p>
						</div>
						{/* <div className='article-nav-section article-section'>
							<div className='article-nav-button' onClick={() => handleLeftClick()} >
								<LeftArrowIcon iconSize='150px' iconColor='rgba(255, 255, 255, 0.75)'/>
							</div>
							<div className='article-nav-button' onClick={() => handleRightClick()} >
								<RightArrowIcon iconSize='150px' iconColor='rgba(255, 255, 255, 0.75)' />
							</div>
						</div> */}
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<div className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</div>
						</div>
					</div>
				</article>
	
				<article data-index='1' data-status='inactive'>
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Message Forum</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>A unique and fun message forum app that follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session npm package for authentication.</p>
						</div>
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<button className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
						</div>
					</div>
				</article>
	
				<article data-index='2' data-status='inactive'>    
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Song Search</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.</p>
						</div>
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<button className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
						</div>
					</div>
				</article>
	
				<article data-index='3' data-status='inactive'>    
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Note Taker</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>A clean, crisp, and very usefuly note-taking app that uses an express.js backend that allows users to save and retrieve note data from a JSON file.</p>
						</div>
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<button className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
						</div>
					</div>
				</article>
	
				<article data-index='4' data-status='inactive'>    
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Weather Dashboard</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the OpenWeatherMap API.</p>
						</div>
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<button className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
						</div>
					</div>
				</article>
	
				<article data-index='5' data-status='inactive'>    
					<div className='article-image-section article-section' />
					<div className='article-info-section'>
						<div className='article-title-section article-section'>
							<h2>Workday Scheduler</h2>
						</div>
						<div className='article-description-section article-section'>
							<p>A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</p>
						</div>
						<div className='article-nav-section article-section'>
							<button className='article-nav-button' onClick={handleLeftClick}>
								<LeftArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
							<button className='article-nav-button' onClick={handleRightClick}>
								<RightArrowIcon iconSize='75px' iconColor='rgba(255, 255, 255, 0.75)' />
							</button>
						</div>
					</div>
				</article>
			</main>
		</>
	)
}
