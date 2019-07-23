import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedfrom');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldcompnentupdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getsnapshotebeforeupdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] compnentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {      
      return <Person 
              dClick={() => this.props.dClick(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.props.changed(event, person.id)} />
    });
  }
};

export default Persons;