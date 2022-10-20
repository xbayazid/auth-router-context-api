import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-2xl mt-9'>This is home for {user?.email}</h2>
        </div>
    );
};

export default Home;