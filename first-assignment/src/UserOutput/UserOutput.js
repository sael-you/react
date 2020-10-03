import React from 'react';

const UserOutput = (props) => {
    return <div>
        <p>
            Hello!
        </p>
        <p>
            How are you doing {props.UserName}?
        </p>
    </div>           
}

export default UserOutput;