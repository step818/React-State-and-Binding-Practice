import React from 'react';
import './Person.css';
import Radium  from 'radium';
import Auxillary from '../../../hoc/Auxillary';

class Person extends React.Component {
    render() {

        const aStyle = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }
        console.log('[Person.js] rendering');
        return(
            <Auxillary>
                <div className="Person" style={aStyle}>
                    <p onClick={this.props.dClick}>This person's name is {this.props.name} and they are {this.props.age} years old.</p>
                    <h3>{this.props.children}</h3>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </div>
            </Auxillary>
        );
    }
}

export default Radium(Person);