import React from 'react';

const UserInput = (props) => {
    return(
        <div>
            <label>This is User input</label>
            <input type="text" onChange={props.somethingIsHappening} value={props.constel}/>
        </div>       
    );
}

export default UserInput;