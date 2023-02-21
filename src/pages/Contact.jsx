import React, { Fragment } from 'react'

import '../assets/styles/Contact.css'

import CustomInput from '../components/CustomInput.jsx'
import CustomTextarea from '../components/CustomTextarea.jsx'
import CustomButton from '../components/CustomButton.jsx'

export default function Contact() {
	return (
		<Fragment>
			<div className='contact-page-wrapper'>
				<div className='contact-page-title'>Contact Me</div>
				<form
					className='contact-form'
					action='https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823'
					method='POST'
					target='_blank'>
					<CustomInput
						className='contact-form-entry'
						type='text'
						name='name'
						placeholder='Full Name'
						required
					/>
					<CustomInput
						className='contact-form-entry'
						type='email'
						name='email'
						placeholder='Email Address'
						required
					/>
					<CustomTextarea
						className='contact-form-entry'
						name='message'
						placeholder='Your Message'
						required
					/>
					<CustomButton
						className='contact-form-submit-btn'
						type='submit'>
						Submit Form
					</CustomButton>
				</form>
			</div>
		</Fragment>
	)
}
