import React from 'react'

import '../assets/styles/Contact.css'

export default function Contact() {
	return (
		<>
			<section
				className='page-section'
				id='contact'>
				<div className='page-section'>
					<h2 className='page-section-heading text-center text-uppercase text-secondary m-auto'>
						Contact Me
					</h2>
					<div className='container'>
						<form
							target='_blank'
							action='https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823'
							method='POST'>
							<div
								className='form-group'
								id='contactForm'>
								<div className='form-row'>
									<div className='col mb-2'>
										<input
											type='text'
											name='name'
											className='form-control'
											placeholder='Full Name'
											required />
									</div>
									<div className='col mb-2'>
										<input
											type='email'
											name='email'
											className='form-control'
											placeholder='Email Address'
											required />
									</div>
									<div className='form-group mb-2 text-center'>
										<textarea
											placeholder='Your Message'
											className='form-control'
											name='message'
											rows='10'
											required />
										<button
											type='submit'
											className='btn btn-lg btn-secondary btn-block mt-3'>
											Submit Form
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}
