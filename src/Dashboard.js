import React, { Component } from 'react';
import './index.css';
// import {REACT_APP_API_BASE_URL} from './config.js';

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

  render() {
    const renderCat =  
            <div>
            <header className='cat'>
              <span>{this.state.catToAdopt.name}</span>
              <img src={this.state.catToAdopt.imageURL} alt={this.state.catToAdopt.imageDescription} height='300' width='300'/>
            </header>
            <main>
             <dl>
               <dt>{this.state.catToAdopt.imageDescription}</dt>
               <dt>{this.state.catToAdopt.sex}</dt>
               <dt>{this.state.catToAdopt.age}</dt>
               <dt>{this.state.catToAdopt.breed}</dt>
               <dt>{this.state.catToAdopt.story}</dt>
            </dl>
            </main>;
            </div>;
    const renderDog =
    <div>
    <header className='cat'>
      <span>{this.state.dogToAdopt.name}</span>
      <img src={this.state.dogToAdopt.imageURL} alt={this.state.dogToAdopt.imageDescription} height='300' width='300'/>
    </header>
    <main>
     <dl>
       <dt>{this.state.dogToAdopt.imageDescription}</dt>
       <dt>{this.state.dogToAdopt.sex}</dt>
       <dt>{this.state.dogToAdopt.age}</dt>
       <dt>{this.state.dogToAdopt.breed}</dt>
       <dt>{this.state.dogToAdopt.story}</dt>
    </dl>
    </main>;
    </div>; 

    return (
      <div className='dashboard'>
       <div>
        <header className="app-header">
          <h1 className="app-title">Animal Shelter Adoption</h1>
        </header>
        <p className="app-intro">
         Click the ADOPT button to adopt the next pet available. 
        </p>
      </div>
      <div>
        <section className='cat-section'>
        {renderCat}
        </section>
      </div>
      <div>
        <section className='dog-section'>
        {renderDog}
        </section>
      </div>
      </div>
    );
  }
}

export default Dashboard; 
