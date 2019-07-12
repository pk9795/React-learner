import React, {Component} from 'react';

import icon1 from '../images/development.png';
import icon2 from '../images/appdevelopment.png';
import icon3 from '../images/digitalmarketing.png';

export default (props) => {

	

		return(
			<section className= "services padd-t-75 padd-b-50">
			<div className="container">
			<div className="row justify-content-md-center">
			<div className="title mar-b-25">
			<h1>SERVICES</h1>
			</div>
			</div>

			<div className="row">
			<div className="col-4">
			<div className="s1 padd">
			<img src={icon1} height="50" alt="icon-1"/>
			<h5 className="mar-t-15">Website Design</h5>
			<p>Choose from fixed to the top, fixed to the bottom, or stickied to the top</p>
			<button>Read More</button>
			</div>
			</div>

			<div className="col-4">
			<div className="s2 padd">
			<img src={icon2} height="50" alt="icon-1"/>
			<h5 className="mar-t-15">App Development</h5>
			<p>Choose from fixed to the top, fixed to the bottom, or stickied to the top</p>
			<button>Read More</button>
			</div>
			</div>

			<div className="col-4">
			<div className="s3 padd">
			<img src={icon3} height="50" alt="icon-1"/>
			<h5 className="mar-t-15">Digital Marketing</h5>
			<p>Choose from fixed to the top, fixed to the bottom, or stickied to the top</p>
			<button>Read More</button>
			</div>
			</div>

			</div>
			</div>
			</section>

			)
	}
