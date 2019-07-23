import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedfrom');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||           nextProps.changed !== this.props.changed || nextProps.dClick !== this.props.dClick) {
  //     return true;
  //   } else {
  //   return false;
  //   }
  // }

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
              changed={(event) => this.props.changed(event, person.id)}
              isAuth={this.props.isAuthenticated} />
    });
  }
};

export default Persons;