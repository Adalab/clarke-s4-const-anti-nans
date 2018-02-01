import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Preview from './components/Preview';
import Form from './components/Form';
import './scss/main.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={};
		this.updateState = this.updateState.bind(this);
	}
updateState(prop, value){
	console.log(prop + ':' + value);
	const newState = {};
	newState[prop] = value;
	this.setState(newState);
}
  render() {
    return (
      <div className="App">
				<body className="body">
					<Header />
					<main id="principal-content" className="principal-content">
						<h1 className="principal-title">Crea tu propio CV</h1>
						<Hero />

						<Form updatePreview={this.updateState} />
						<Preview
							name={this.state.name}
							surname={this.state.surname}
							email={this.state.email}
							phone={this.state.phone}
							address={this.state.address}
							profession={this.state.profession}
							summary={this.state.summary}
							twitter={this.state.twitter}
							linkedin={this.state.linkedin}
							job={this.state.job}
							jobCharge={this.state.jobCharte}
							jobBusiness={this.state.jobBusiness}
							jobExtract={this.state.jobExtract}
						/>

					</main>
					<Footer />
				</body>

      </div>
    );
  }
}

export default App;
