import React from 'react';
import './Cockpit.css';
import Radium from 'radium';

const cockpit = (props) => {

    const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };



    let classes = [];

    if(props.showPersons) {
        buttonStyle.backgroundColor = 'red'
        buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    if (props.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a react app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button 
                style={buttonStyle} 
                onClick={props.tClicked}>Toggle Persons</button>
        </div>
    );
};

export default Radium(cockpit);