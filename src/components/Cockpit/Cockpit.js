/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
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

    // const buttonStyle = {
    //     backgroundColor: 'green',
    //     color: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer',
    //     ':hover': {
    //       backgroundColor: 'lightgreen',
    //       color: 'black'
    //     }
    //   };



    let assignedClasses = [];
    let tglBtnClass = classes.Cockpit;
    let lgnBtnClass = classes.Red;

    // if(props.showPersons) {
    //     buttonStyle.backgroundColor = 'red'
    //     buttonStyle[':hover'] = {
    //     backgroundColor: 'salmon',
    //     color: 'black'
    //   }
    // }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                // className={tglBtnClass} 
                ref={toggleBtnRef}
                onClick={props.tClicked}>Toggle Persons</button>
            
              <button 
                // className={lgnBtnClass}
                onClick={authContext.login}>Log in</button>
            
        </div>
    );
};

export default React.memo(cockpit);