import React, {Component} from 'react';


export class Pet extends Component {


  render() {
    
            
            return (


         <div className='pet'>
            <header className='pet-header'>
              <span>{this.props.petToAdopt.name}</span><br></br>
              <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription} height='300' width='300'/>
            </header>
            <main>
             <dl>
               <dt>{this.props.petToAdopt.imageDescription}</dt>
               <dt>{this.props.petToAdopt.sex}</dt>
               <dt>{this.props.petToAdopt.age}</dt>
               <dt>{this.props.petToAdopt.breed}</dt>
               <dt>{this.props.petToAdopt.story}</dt>
            </dl>
            </main>
            <button>ADOPT</button>
            </div>






    )
  }
}
