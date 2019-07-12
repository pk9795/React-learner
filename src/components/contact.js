import React, {Component} from 'react';

import App from '../App.css';

class Contact extends Component{
	render(){
		return(

				<section id="contact" className = "padd-t-75 padd-b-50">

					<h1 className="section-header">CONTACT</h1>

					<div className="contact-wrapper">
						<div className = "container">
							<div className ="row">

								<div className ="col-md-6">

									<form className="form-horizontal" role="form">

										<div className="form-group">
											<div className="col-sm-12">
												<input type="text" className="form-control" id="name" placeholder="Name" name="name" value="" />
											</div>
										</div>

										<div className="form-group">
											<div className="col-sm-12">
												<input type="email" className="form-control" id="email" placeholder="E-mail" name="email" value="" />
											</div>
										</div>

										<div className="form-group">
											<div className="col-sm-12">
												<textarea className="form-control" rows="10" placeholder="Message" name="message">
												</textarea>
											</div>
										</div>

										
										<div className="col-sm-12">
											<button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
												<div className="button">
													<i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
												</div>
											</button>
										</div>
									</form>

								</div>

								<div className ="col-md-6">

									<div className="direct-contact-container">

										<ul className="contact-list">
											<li className="list-item"><i className="fas fa-map-marker fa-2x"><span className="contact-text place">SEATTLE | WA</span></i>
											</li>

											<li className="list-item"><i className="fas fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i>
											</li>

											<li className="list-item"><i className="fas fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">venkman@gmail.com</a></span></i>
											</li>

										</ul>

										<hr />
										<ul className="social-media-list">
									
											<li><a href="#" target="_blank" className="contact-icon">
												<i className="fab fa-twitter"></i></a>
											</li>
											<li><a href="#" target="_blank" className="contact-icon">
												<i className="fab fa-instagram" aria-hidden="true"></i></a>
											</li>
											<li><a href="#" target="_blank" className="contact-icon">
												<i className="fab fa-facebook-f"></i></a>
											</li>
										</ul>
										<hr />
									</div>

								</div>

							</div>

						</div>


						

				

					</div>

				</section>  

			)
		}
	}

	export default Contact;
