import React, { Component } from 'react';


class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<p className="copy">Copyright &copy;NaN!</p>
				<div className="up-button"><a href="#principal-content">up-button</a>
				</div>
			</footer>
		);
	}
}

export default Footer;

// handleJob(event){
// 	switch (event.target.name) {
// 		case "wat":
// 			let newJob = {}
// 			newJob.job = event.target.value
// 			this.setState(prevState => ({
// 				job: [...prevState.job, newJob]
// 			}))
// 			break;
// 		case "jobCharge":
// 			this.setState({
// 				job:{
// 					jobCharge: event.target.value}
// 			});
// 			break;
// 		default:
// 			break;
// 	}
// }
