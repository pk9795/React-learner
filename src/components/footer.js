import React, { Component } from 'react';

class Footer extends Component{

	render(){

		return(

			<footer className="footer-wrapper padd-t-50">
				<div className="container padd-b-50">
					<div className="row">
						<div className="col-md-4">
							<div className="footer-widget logo-widget">
								<h4>About us</h4>
	                            <div className="text mar-t-15">
	                            	<p>We have over 10 years of experience in Design, We take pride in delivering Intelligent Designs, Engaging Experiences for clients all over the World.</p>
	                            </div>
	                            <button className="mar-t-15">Read More</button>
                        	</div>
						</div>

						<div className="col-md-4">
							<h4>Related Links</h4>
							<ul className="links mar-t-15">
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Our Services</a></li>
								<li><a href="#">Contact us</a></li>
							</ul>
						</div>

						<div className="col-md-4">
							<div className="contact-detail">
								<h4>Contact</h4>
								<p className="mar-t-15"><i class="fas fa-map-marker-alt fa-md"></i> 3 Bourne St, London, UK</p>
								<p><i class="fas fa-phone fa-md"></i> 203 123 4567</p>
								<p><i class="fas fa-envelope fa-md"></i> info@cultivators.com</p>
							</div>

							<div class="social">
								<a href="https://www.facebook.com" target="_blank">
								<i class="fab fa-facebook-f"></i>
								</a>
								<a href="https://www.twitter.com" target="_blank">
								<i class="fab fa-twitter"></i>
								</a>
								<a href="https://www.instagram.com" target="_blank">
								<i class="fab fa-instagram"></i>
								</a>
								<a href="https://in.linkedin.com" target="_blank">
								<i class="fab fa-linkedin-in"></i>
								</a>
								
							</div>
						</div>						
					</div>
				</div>
				<div className="copyright-wrapper text-center padd-t-15 padd-b-15">
					© 2019 <b>React-Js</b> . All rights reserved
				</div>
			</footer>
		)
	}
}

export default Footer;