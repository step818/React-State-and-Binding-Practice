import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.pClick}>This person's name is {props.name} and they are {props.age} years old.</p>
            <h3>{props.children}</h3>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;