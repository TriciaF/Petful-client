import React, { Component } from 'react';
import './index.css';
// import {REACT_APP_API_BASE_URL} from './config.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catToAdopt:null,
      dogToAdopt: null
    }
  }

  render() {
    return (
      <div>
       <div className="dashboard">
        <header className="app-header">
          <h1 className="app-title">Animal Shelter Adoption</h1>
        </header>
        <p className="app-intro">
         Click adoption to adopt the next pet available. 
        </p>
      </div>
        <section className='cat-section'>
          <header className='cat'>
            <span>This is the Cat Section</span>
          </header>
        </section>
      </div>
    );
  }
}

export default Dashboard; 
