import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, navigate }from "@reach/router"

const UpdateArtist = (props) => {
    const [firstName, setFirstName] = useState("");
    const [preferredGenre, setPreferredGenre] = useState("");
    const [mainSkill, setMainSkill] = useState("");

    const [id, setId] = useState("");

    const [errors, setErrors] = useState("");
    const { _id } = props;    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/artists/${_id}`, {
            firstName,
            preferredGenre,
            mainSkill,

        })
        .then((response) => {
            console.log(response);
            navigate("/");
            })
        .catch((err) => {
            
            console.log("ERROR FOUND");
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/artists/${_id}`)
        .then(response => {
            console.log(response.data);
            setFirstName(response.data.firstName);
            setPreferredGenre(response.data.preferredGenre);
            setMainSkill(response.data.mainSkill);

            setId(response.data._id);

        })
        .catch(err => console.log(err));
    }, []);

    console.log(_id);
    return (
    <div className="container text-center">
        <h1>Artist Update</h1>
        <h1>Update this Artists' Details </h1> 
        <hr/>
        <h2 className=""><Link to="/">Back to Home
        </Link></h2>        

        <form className="border border-dark" onSubmit={handleSubmit}> 
        <div className="form-group">First Name:{" "} 
        <input type="text" 
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        />
        </div>
        <div className="form-group">Genre of Choice:{" "} 
        <input type="text" 
        onChange={(e) => setPreferredGenre(e.target.value)}
        value={preferredGenre}
        />
        </div>
        <div className="form-group">Main Skill{" "} 
        <input type="text" 
        onChange={(e) => setMainSkill(e.target.value)}
        value={mainSkill}
        />
        </div>
        <button className="btn btn-success"type="submit" value="Update">Update</button>
        {errors.firstName ? <p>{errors.firstName.message}</p> : null}
        {errors.preferredGenre ? <p>{errors.preferredGenre.message}</p> : null}
        {errors.mainSkill ? <p>{errors.mainSkill.message}</p> : null}


    </form>

    </div>
    );
    };


export default UpdateArtist;