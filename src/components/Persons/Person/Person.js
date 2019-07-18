import React from 'react';
import './Person.css';
import Radium  from 'radium';

const person = (props) => {

    const aStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return(
        <div className="Person" style={aStyle}>
            <p onClick={props.dClick}>This person's name is {props.name} and they are {props.age} years old.</p>
            <h3>{props.children}</h3>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);