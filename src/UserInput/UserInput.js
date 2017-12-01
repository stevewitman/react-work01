import React from 'react';

const userinput = (props) => {

    const style = {
        backgroundColor: 'silver'
    }

    return (
        <div>
            <h3>User Input Component</h3>
            <input style={style} type="text" value={props.username} onChange={props.change}/>
        </div>
    )

}

export default userinput;