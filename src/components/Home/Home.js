import React from 'react';
import userData from '../../userData/users';
import { useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const first10 = userData.slice(0,10);
    const [users, setUsers] = useState(first10);

    return (
        <div className="twin-container">
            <div className="parent-container">
                {
                    users.map(users => <Users user={users}></Users>)
                }
            </div>
            <div className="total">
                <span>Total Friends: 55</span>
            </div>
        </div>
    );
};

export default Home;