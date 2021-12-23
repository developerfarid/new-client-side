import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import './Contact.css'

const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mt82hy2', 'service_mt82hy2', form.current, 'farid')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	return (
		<div className="bg-info py-5 text-white">
			<div className="container">
				<div className="row">
					<h1 className="text-center">Contact Us</h1>
				</div>
				<div className="row">
					<h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
				</div>
				<form ref={form} onSubmit={sendEmail}>
				<div className="row input-container">
					<div className="col-xs-12">
						<div className="styled-input wide">
							<input name="name" type="text" required />
							<label>Name</label>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input">
							<input type="text" name="email" required />
							<label>Email</label>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="styled-input" style={{ float: "right;" }}>
							<input type="text" name="phone" required />
							<label>Phone Number</label>
						</div>
					</div>
					<div className="col-xs-12">
						<div className="styled-input wide">
							<textarea name="sms" required></textarea>
							<label>Message</label>
						</div>
					</div>
					<div className="col-xs-12">
						<button type='submit' className="btn-lrg submit-btn">Send Message</button>
					</div>
				</div>
				</form>
			</div>

		</div>
	);
};

export default Contact;