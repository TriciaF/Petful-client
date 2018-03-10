import React, {Component} from 'react';


export class Pet extends Component {


  render() {

    if(!this.props.petToAdopt) {
      return <p>Loading</p>
    }
    return (

    <section className='pet-section'>
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
              <button onClick={this.props.onAdoptPet}>ADOPT</button>
         </div>
    </section>
    )
  }
}
