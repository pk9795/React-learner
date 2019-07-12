import React, { Component } from 'react';

import Navbar from './navbar';
import Services from './services';
import Footer from './footer';
import Contact from './contact';


class Home extends Component{
	render(){
		return(

			<div className = "homepage">

			<Navbar/>

			<div className = "bg-wrapper">
			</div>

			<Services/>

			<Contact/>

			<Footer/>

			</div>
			)
	}
}

export default Home;