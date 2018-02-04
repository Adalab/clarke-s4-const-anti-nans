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
		this.updateState = this.updateState.bind(this);
		this.updateJobState = this.updateJobState.bind(this);
		this.updateStudyState = this.updateStudyState.bind(this);

		this.state={
			jobArr: [],
			studyArr:[]
		};
	}

	updateState(prop, value){
		const newState = {};
		newState[prop] = value;
		this.setState(newState);
	}

	updateJobState(job){
		this.setState(prevState => ({
    	jobArr: [...prevState.jobArr, job]
		}))
	}

	updateStudyState(study){
		this.setState(prevState => ({
    	studyArr: [...prevState.studyArr, study]
		}))
	}


  render() {
    return (
      <div className="App">
				<body className="body">
					<Header />
					<main id="principal-content" className="principal-content">
						<h1 className="principal-title">Crea tu propio CV</h1>
						<Hero />
						<Form
							updatePreview={this.updateState}
							updateJobsPreview={this.updateJobState}
							updateStudyPreview={this.updateStudyState}
						/>
						<Preview
							name={this.state.name}
							surnames={this.state.surnames}
							email={this.state.email}
							phone={this.state.phone}
							address={this.state.address}
							profession={this.state.profession}
							summary={this.state.summary}
							twitter={this.state.twitter}
							linkedin={this.state.linkedin}
							jobArr={this.state.jobArr}
							studyArr={this.state.studyArr}
							other={this.state.other} />

					</main>
					<Footer />
				</body>

      </div>
    );
  }
}

export default App;
