import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';



const ArtistForm = () => {
    const [firstName, setFirstName] = useState("");
    const [preferredGenre, setPreferredGenre] = useState("");
    const [mainSkill, setMainSkill] = useState("");
    const [otherTalents, setOtherTalents] = useState("");

    const [errors, setErrors] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/artists", {
            firstName,
            preferredGenre,
            mainSkill,
            otherTalents,
            
        })
        .then((response) => {
            console.log(response);
            console.log("POSTED BABYY");
            navigate("/");
            })
        .catch((err) => {
            console.log("ERROR FOUND")
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
    
    // Form setup or front end formatting
    <div className=" App-name Main-background container-fluid text-center">
    <h1 className="App-name">Add Artists</h1> 
    <h3 >Add a new Artist</h3>
    <hr />
    <h2 ><Link className="hyperlink-color" to="/">Back to Home
        </Link></h2>        

    
    <form className="border border-dark " onSubmit={handleSubmit}> 
        <div className="form-group App-input  text-center">First Name:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        />
        </div>
        {errors.firstName ? <p className="App-input errors">{errors.firstName.message}</p> : null}
        <div className="form-group App-input text-center">Preferred Genre:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setPreferredGenre(e.target.value)}
        value={preferredGenre}
        />
        </div>
        {errors.preferredGenre ? <p className="App-input errors">{errors.preferredGenre.message}</p> : null}

        <div className="form-group App-input text-center">Main Skill:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setMainSkill(e.target.value)}
        value={mainSkill}
        />
        </div>
        {errors.mainSkill ? <p className=" App-input errors">{errors.mainSkill.message}</p> : null}

        <div className="form-group App-input text-center">Other Talent:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setOtherTalents(e.target.value)}
        value={otherTalents}
        />
        </div>
        <button className="btn btn-success margin-top btn-lg" type="submit"><i class="bi bi-music-note"></i> Seek other Musicians</button>

    </form>
    </div>
    );

};

export default ArtistForm;