import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Users = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/" className="btn btn-primary" >Home</Link>
                    <h1>Users</h1>
                    <Link to="/pictures" className="btn btn-primary">Go to Pictures</Link>
                </div>
                <div className="col-md-8">
                    {users.map(user => (
                        <div className="card border border-dark m-2">
                            <div className="card-body justify-content-center">
                                <h1 className="card-title center-text">{user.name}</h1>
                                <h3 className="card-subtitle mb-2 text-muted">Username: {user.username}</h3>
                                <p className="card-text">Street: {user.address.street} </p>
                                <p className="card-text">City: {user.address.city} </p>
                                <p className="card-text">Zipcode: {user.address.zipcode} </p>
                                <Link to={`/${user.id}/users`} className="btn btn-primary">Company</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Users;