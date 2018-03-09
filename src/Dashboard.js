import React, { Component } from 'react';
import './index.css';
// import {REACT_APP_API_BASE_URL} from './config.js';
import {Pet} from './components/Pet.js';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catToAdopt:{
        imageURL:'https://i.imgur.com/0JP5XWes.jpg',
	      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
	      name: 'Fluffy',
	      sex: 'Female',
	      age: 2,
	      breed: 'Bengal',
	      story: 'Thrown on the street'
      },
      dogToAdopt:{
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
	      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
	      name: 'Zeus',
	      sex: 'Male',
	      age: 3,
      	breed: 'Golden Retriever',
	      story: 'Owner Passed away'
      },
    }
  }

  onAdoptPet(){
    return console.log('Adopt Me')
  }


  render() {

    return (
      <div className='dashboard'>
        <header className="app-header">
          <h1 className="app-title">Animal Shelter Adoption</h1>
        </header>
        <p className="app-intro">
         Click the ADOPT button to adopt the next pet available. 
        </p>
        <div className='adoption-section'>
        <Pet petToAdopt={this.state.catToAdopt} onAdoptPet={this.onAdoptPet}/>
        <Pet petToAdopt={this.state.dogToAdopt} onAdoptPet={this.onAdoptPet}/>
        </div>
      </div>
    );
  }
}

export default Dashboard; 
