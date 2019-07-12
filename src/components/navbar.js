import React, { Component } from 'react';
import pklogo from '../images/pklogo.png';
import { Link } from 'react-router-dom';


class Navbar extends Component{
	render(){

		return(

			// <header className="header-wrapper">

			// <div className = "container">
			// <nav className="navbar navbar-expand-lg navbar-light">
			// <a className="navbar-brand" href="/"><img src={logo} height="75" alt="icon-1"/></a>

			// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			// <span className="navbar-toggler-icon"></span>
			// </button>

			// <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

			// <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
			// <li className="nav-item">
			// <Link to="/" activeClassName="active">Home</Link>
			// </li>
			
			// <li className="nav-item">
			// <Link to="/about" activeClassName="active">About Us</Link>
			// </li> 

			// <li className="nav-item">
			// <Link to="/contact" activeClassName="active">Contact Us</Link>
			// </li>
			// </ul>

			// </div>
			// </nav>

			// </div>

			// </header>

			<nav role='navigation'>
			<a className="navbar-brand" href="/"><img src={pklogo} width="50" height="auto" alt="icon-1"/></a>
			<div id="menuToggle">

			<input type="checkbox" />


			<span></span>
			<span></span>
			<span></span>


			<ul id="menu">
			<li className="nav-item">
			<Link to="/" activeClassName="active">Home</Link>
			</li>
			<li className="nav-item">
			<Link to="/about" activeClassName="active">About Us</Link>
			</li>
			
			<li className="nav-item">
			<Link to="/contact" activeClassName="active">Contact Us</Link>
			</li>
			</ul>
			</div>
			</nav>
			)
		}
	}

	export default Navbar;