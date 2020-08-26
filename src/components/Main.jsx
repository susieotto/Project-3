import React from "react";
import { Redirect, Link } from 'react-router-dom';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			userType: "",
			loggedIn: false
		};
	}
	render() {
		if (this.props.loggedIn) {
			if (this.props.userType) {
				if (this.props.userType === "manager") {
					return (
						<div>
							<Redirect to="/ManagerHome" />
						</div>
					)
				}
				else if (this.props.userType === "employee") {
					return (
						<div>
							<Redirect to="/EmployeeHome" />
						</div>
					)
				}
			}
		}
		return (
			<div className="row">
				<div className="section no-pad-bot" id="index-banner">
					<div className="container">
						<br></br>
						<h1 className="header center light-blue-text"><img src="./assets/images/calabs_logo_250.png" ></img></h1>
						<div className="row center">
							<h5 className="header col s12 light">Keeping your labs covered with ease.</h5>
						</div>
						<div className="row center">
							<Link to="/signup" id="signup-btn" className="btn-large waves-effect waves-light light-blue">
								Get Started
				</Link>
						</div>
						<br></br>
					</div>
				</div>
				<div className="container">
					<div className="section">
						<div className="row">
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">flash_on</i></h2>
									<h5 className="center">Quick Scheduling</h5>
									<p className="light"> an easy-to-use online employee management app. Keep track of each employee’s schedule. </p>
								</div>
							</div>
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">group</i></h2>
									<h5 className="center">Real time Updating</h5>
									<p className="light">Managers can Add, Remove or Update Employees, And thier schedules, Also Managers can Add An Announcement to all employees, The app automatically updates changes in real time.</p>
								</div>
							</div>
							<div className="col s12 m4">
								<div className="icon-block">
									<h2 className="center light-blue-text"><i className="material-icons home">settings</i></h2>
									<h5 className="center">Easy to work with</h5>
									<p className="light">With the CALABS scheduler App, Managers can quickly see who’s working, Who’s scheduled and who’s available. </p>
								</div>
							</div>
						</div>
					</div>
					<br></br>
				</div>
				<footer className="page-footer black">

					<div className="footer-copyright">
						<div className="container">
							<div className="col  s12 white-text credits">
								Created by <a href="https://github.com/margaritag17" target="_blank" >Margarita Gurrola</a> | <a href="https://github.com/RubyHurd" target="_blank" >Ruby Hurd</a> | <a href="https://github.com/susieotto" target="_blank" >Susie Otto</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Main;
