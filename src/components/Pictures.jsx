import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Pictures = () => {

    const [pictures, setPictures] = useState([]);

    const getPicture = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/photos');
        let pictures = await res.json();
        setPictures(pictures);
    }
    useEffect(() => {
        getPicture();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/" className="btn btn-primary" >Home</Link>
                    <h1>Pictures</h1>
                    <Link to="/users" className="btn btn-primary">Go to Users</Link>
                </div>
                {pictures.map(picture => (
                    <div className="col-md-8">
                        <div className="card border border-dark m-2">
                            <div className="card-body justify-content-center">
                                <h1 className="card-title center-text">{picture.title}</h1>
                                <Link to={`/${picture.id}/image`} className="btn btn-primary">Go To Image</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Pictures;