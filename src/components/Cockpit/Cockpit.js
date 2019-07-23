/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
// import Radium from 'radium';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //Http Request...
    // setTimeout(() => {
    //   alert('Saved data to cloud.');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

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

    if (props.personsLength <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (props.personsLength <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a react app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button 
                ref={toggleBtnRef}
                style={buttonStyle} 
                onClick={props.tClicked}>Toggle Persons</button>
            
              <button onClick={authContext.login}>Log in</button>
            
        </div>
    );
};

export default React.memo(cockpit);