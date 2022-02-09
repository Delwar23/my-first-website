import React from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Link to='/home'>Home</Link>
            <br></br>
            <Link to='/Register'>Register</Link>
            <br></br>
            <Link to='/Login'>Login</Link>
            <br></br>
           <span>  {user.displayName} </span>
            {user?.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;