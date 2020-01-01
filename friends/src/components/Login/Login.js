import React from 'react';

import {} from 'reactstrap';

const Login = props => {

    return (
        <>
            Login
            <button onClick={e => props.login()}>Login</button>
        </>
    )
}

export default Login