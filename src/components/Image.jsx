import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Image = (props) => {

    const [image, setImage] = useState({});

    const getImage = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.match.params.pictureid}`);
        let image = await res.json();
        setImage(image);
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <Link to="/" className="btn btn-primary" >Home</Link>
                    <h1>{props.match.params.pictureid}</h1>
                    <Link to="/users" className="btn btn-primary">Go to Users</Link>
                </div>
                <div className="col-md-8">
                        <div className="card border border-dark m-2">
                            <div className="card-body justify-content-center">
                                <h1 className="card-title center-text">{image.title}</h1>
                                <p className="card-body" >{image.url}</p>
                            </div>
                        </div>
                        <Link to="/pictures" className="btn btn-primary btn-block">Back to Pictures</Link>
                </div>
            </div>
        </>
    )

}



export default Image;
