import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='register'>Register</Link>
      </div>
    );
};

export default Header;