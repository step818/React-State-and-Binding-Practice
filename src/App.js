import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Person/UserInput';
import UserOutput from './Person/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Silas', age: 1 },
      { name: 'Sophia', age: 28},
      { name: 'Veronika', age: 30 },
      { name: 'Stephen', age: 30}
    ],
    constellations: [
      { name: 'cancer'},
      { name: 'aquarius'},
      { name: 'leo'},
      { name: 'libra'},
      { name: 'capricorn'},
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    this.setState({
      persons: [
        { name: newName, age: 1 },
        { name: 'Sophia', age: 28},
        { name: 'Veronika', age: 30 },
        { name: 'Stephen', age: 30}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'What', age: 1 },
        { name: 'Just', age: 28},
        { name: 'Happened?', age: 30 },
        { name: event.target.value, age: 30}
      ]
    })
  }

  changeConstellationName = (event) => {
    this.setState({
      constellations: [
        { name: event.target.value},
        { name: 'aquarius'},
        { name: 'leo'},
        { name: 'libra'},
        { name: 'capricorn'},
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={buttonStyle} 
          onClick={() => this.switchNameHandler('Dookie')}>Click</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          pClick={this.switchNameHandler.bind(this, 'Coookie!!')} />
        <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} 
          changed={this.nameChangeHandler}/>
        <UserInput 
          constel={this.state.constellations[0].name} 
          somethingIsHappening={this.changeConstellationName}/>
        <UserOutput constel={this.state.constellations[0].name}/>
        <UserOutput constel={this.state.constellations[1].name}/>
        <UserOutput constel={this.state.constellations[2].name}/>
        <UserOutput constel={this.state.constellations[3].name}/>
        <UserOutput constel={this.state.constellations[4].name}/>
      </div>
    );
  }
}

export default App;
