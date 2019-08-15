import React from 'react';
import { Link } from 'react-router-dom';


let Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/users" className="btn btn-primary m-2">Go to Users</Link>
                    <h1>Home</h1>
                    <Link to="/pictures" className="btn btn-primary m-2">Go to Pictures</Link>
                </div>
                <div className="jumbotron border border-dark bg-success">
                    <h3>This Lab is to show how to use hooks in React</h3>
                </div>
            </div>

        </>
    )
}


export default Home;
