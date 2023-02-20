import React, { Fragment } from 'react'

import '../assets/styles/Contact.css'

import CustomButton from '../components/CustomButton.jsx'


export default function Contact() {

	const btnStyle = {
		backgroundColor: 'var(--secondary)',
		':hover': {
			// transition: 'box-shadow 0.5s ease-in-out',
			// boxShadow: '2px 2px 10px hsla(0, 0%, 100%, 0.5), -2px -2px 10px hsla(0, 0%, 100%, 0.5)',
			// boxShadow: '10px 10px 20px red',
			backgroundColor: 'red'
		}
	}
		return (
		<Fragment>
			<section
				className='page-section'
				id='contact'>
				<h2 className='page-section-heading text-center text-uppercase text-secondary m-auto' style={{textAlign: 'center',}}>
					Contact Me
				</h2>
				<div className='container'>
					<form
						action='https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823'
						method='POST'
						target='_blank'>
						<div
							className='form-group'
							id='contactForm'>
							<div className='form-row'>
									<input
										type='text'
										name='name'
										className='form-control'
										placeholder='Full Name'
										required
									/>
									<input
										type='email'
										name='email'
										className='form-control'
										placeholder='Email Address'
										required
									/>
									<textarea
										placeholder='Your Message'
										className='form-control'
										name='message'
										rows='10'
										required
									/>
									<CustomButton type='submit' style={btnStyle}>
										Submit Form
									</CustomButton>
							</div>
						</div>
					</form>
				</div>
			</section>
		</Fragment>
	)
}
