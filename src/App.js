import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              dClick={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      );

      buttonStyle.backgroundColor = 'red'
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={buttonStyle} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
       
          {persons}

      </div>
    );
  }
}

export default App;
