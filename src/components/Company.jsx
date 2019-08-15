import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Company = (props) => {

    const [user, setUser] = useState({});
    const [company, setCompany] = useState({});
    

    const getCompany = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.usersid}`);
        let user = await res.json();
        setUser(user);
        setCompany(user.company);
    }

    useEffect(() => {
        getCompany();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/" className="btn btn-primary" >Home</Link>
                    <h1>{props.match.params.userid}</h1>
                    <Link to="/pictures" className="btn btn-primary">Go to Pictures</Link>
                </div>
                <div className="col-md-8">
                    <div className="card border border-dark m-2">
                        <div className="card-body justify-content-center">
                            <h1 className="card-title center-text">{user.name}</h1>
                            <p className="card-body" >{company.name}</p>
                        </div>
                    </div>
                    <Link to="/pictures" className="btn btn-primary btn-block">Back to Pictures</Link>
                </div>
            </div>
        </>
    )

}

export default Company;