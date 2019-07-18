import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium, {StyleRoot} from 'radium';


class App extends Component {
  state = {
    persons: [
      { id: 'pqowo', name: 'Silas', age: 1 },
      { id: 'tyruei', name: 'Sophia', age: 28},
      { id: 'nbmfj', name: 'Veronika', age: 30 },
      { id: 'altyqp', name: 'Stephen', age: 30}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    //Return a boolean for all the persons in the array 
    //and check if that id is the one being selected.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //get the person for that which the boolean returned true
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    //update the person's name
    person.name = event.target.value;

    //make an updated copy of the persons array
    //and set the selected index to be the changed name
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            dClick={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      );

      // buttonStyle.backgroundColor = 'red'
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      //}
    }

    

    return (
      <StyleRoot>
      <div className="App">
       <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        tClicked={this.togglePersonsHandler}/>

          {persons}

      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
