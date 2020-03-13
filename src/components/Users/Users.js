import React from 'react';
import { useState } from 'react';
import './Users.css';

const Users = (props) => {
    const { name, email, img } = props.user;
    const [count, setCount] = useState(0);
    const countIncrease = () => setCount(count + 1);

    return (
        <div className="user-container">
            <img src={img} alt=""/>
            <div>
                <h1>Total Count:{count}</h1>
                <h3 className="user-name">{name}</h3>
                <h4 className="user-mail">{email}</h4>
                <button className="btn" onClick={countIncrease}>+</button>
            </div>
        </div>

    );
};

export default Users;