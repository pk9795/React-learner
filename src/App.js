import React, { Component } from 'react';
import render from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';




class App extends Component {

	render() {
		return(



			<Router>
			<div>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={Navbar} />
			<Route path="/about" component={About} />
			<Route path="/about" component={Footer} />
			<Route path="/contact" component={Navbar} />
			<Route path="/contact" component={Contact} />
			<Route path="/contact" component={Footer} />


			</div>
			</Router>
			
			);
		}
	}


	export default App;
