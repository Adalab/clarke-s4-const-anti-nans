import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Preview from './components/Preview';
import Form from './components/Form';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<body className="body">
					<Header />
					<main id="principal-content" className="principal-content">
						<h1 className="principal-title">Crea tu propio CV</h1>
						<Hero />
						<Form />
						<Preview />
					</main>
					<Footer />
				</body>
      </div>
    );
  }
}

export default App;
