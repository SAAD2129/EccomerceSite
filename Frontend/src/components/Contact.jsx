import React from 'react';

const header = () => {
	return (
		<>
			<div className="mt-3">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.716307482763!2d67.98451402572893!3d26.657564229625127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a8eff82b0c4cd%3A0x3783ef7a96dc2424!2sMoro%20Bypass%2C%20Naushahro%20Feroze%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1666850190903!5m2!1sen!2s"
					allowFullScreen=""
					width="100%"
					height={250}
					loading="lazy"
				></iframe>
			</div>
			<div className="container mt-3">
				<h3 className="my-3 small-font center">FEEL FREE TO CONTACT</h3>
				<form>
					<div className="form-inputs">
						<div className="my-1">
							<input type="text" autoComplete="off" placeholder="Enter Your Name" className="form-input plane-input" required />
						</div>
						<div className="my-1">
							<input type="Email" autoComplete="off" placeholder="Enter Your Email" className="form-input plane-input" required />
						</div>
						<div className="my-1">
							<input type="tel" autoComplete="off" placeholder="Enter Your Contact" className="form-input plane-input" required />
						</div>
					</div>
					<div>
						<textarea name="msg" id="msg" placeholder="Enter Message Here" className="plane-input" cols="30" rows="7"></textarea>
					</div>
					<div>
						<input className="btn mb-2 rounded-0" type="submit" value="SEND" />
					</div>
				</form>
			</div>
		</>
	);
};

export default header;
