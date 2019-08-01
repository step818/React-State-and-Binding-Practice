import React, { Component } from 'react';
import  classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, {StyleRoot} from 'radium';
//import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] consstructor');
  }

  state = {
    persons: [
      { id: 'pqowo', name: 'Silas', age: 1 },
      { id: 'tyruei', name: 'Sophia', age: 28},
      { id: 'nbmfj', name: 'Veronika', age: 30 },
      { id: 'altyqp', name: 'Stephen', age: 30}
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props );
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            dClick={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}/>
      );

      //buttonStyle.backgroundColor = 'red';
      
    }

    

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>Remove Cockpit</button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}} >
        {this.state.showCockpit ? (
        <Cockpit 
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length} 
          tClicked={this.togglePersonsHandler}
          />
        ) : null }
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;