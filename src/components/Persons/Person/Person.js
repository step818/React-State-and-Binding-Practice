import React from 'react';
import './Person.css';
import Radium  from 'radium';
import Auxillary from '../../../hoc/Auxillary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
 
    render() {

        const aStyle = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }
        console.log('[Person.js] rendering...');
        return(
            <Auxillary>
                <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <div className="Person" style={aStyle}>
                    <p onClick={this.props.dClick}>This person's name is {this.props.name} and they are {this.props.age} years old.</p>
                    <h3>{this.props.children}</h3>
                    <input
                        // ref={(inputEl)=> {this.inputElement = inputEl}}
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/>
                </div>
            </Auxillary>
        );
    }
}

Person.propTypes = {
    dClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Radium(Person);