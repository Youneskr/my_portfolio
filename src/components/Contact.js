import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ top, setActiveItem }) => {
	setActiveItem('contact')

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm('service_vxi46fp', 'template_f5409i6', form.current, 'W4CAxUM3clqGCEuru')
			.then((result) => {
				console.log(result.text)
			}, (error) => {
				console.log(error.text)
			})
			e.target.reset()
			toast.success('Your email was sent successfully')
	}	

	return (
		<div onLoad={top} className='contact d-flex justify-content-center align-items-center py-5'>
			<div class="login-box m-3">
				<h2>Connect with me</h2>
				<form ref={form} onSubmit={sendEmail}>
					<div class="user-box">
						<input type="text" name="name" required autoFocus />
						<label>Name</label>
					</div>

					<div class="user-box">
						<input type="text" name="email" required />
						<label>Email</label>
					</div>

					<div class="user-box">
						<input type="text" name="subject" required />
						<label>Subject</label>
					</div>

					<div class="user-box">
						{/* <input type="text" name="" required="" /> */}
						<textarea name="message" id="" cols="30" rows="10" required></textarea>
						<label>Message</label>
					</div>

					<button type="submit">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Send
					</button>
				</form>
			</div>
			<div><Toaster position="bottom-center" reverseOrder={false} /></div>
		</div>
	)
}

export default Contact