import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log('context', user)
    return (
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='register'>Register</Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        <button className="btn btn-sm">Sign Out</button>
      </div>
    );
};

export default Header;