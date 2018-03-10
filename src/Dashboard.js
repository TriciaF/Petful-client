import React, { Component } from 'react';
import './index.css';
import {Pet} from './components/Pet.js';
import {fetchCat, adoptCat} from './actions/cat.js';
import {fetchDog, adoptDog} from './actions/dog.js';
import {connect} from 'react-redux';

class Dashboard extends Component {

componentDidMount() {
  this.props.dispatch(fetchCat());
  this.props.dispatch(fetchDog());
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
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={()=>this.props.dispatch(adoptCat())}/>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={()=>this.props.dispatch(adoptDog())}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
});

export default connect(mapStateToProps)(Dashboard); 
