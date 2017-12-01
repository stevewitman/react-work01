import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserCard">
            <h3>User Output Component</h3>
            <h5>{props.username}</h5>
            <p>First Paragraph</p>
            <p>Second Paragraph</p>
        </div>
    )
}

export default useroutput;