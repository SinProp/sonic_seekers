import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect} from "react";

const ShowPet = (props) => {
    const { _id } = props;    
    const [petInfo, setPetInfo] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pets/${_id}`)
        .then(response => {
            console.log(response.data);
            setPetInfo(response.data);
        })
        .catch(err => console.log(err));
    }, );

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
        .then(response => {
            console.log(response.data);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    

    console.log(_id);
    return (
    <div className="container text-center">
        <div className="border border-dark"></div>
        <h1>Pet Shelter</h1>
        <h3>Details about: {petInfo.petName}</h3>
        <h2 className=""><Link to="/">Back to Home
        </Link></h2>        
        <hr />
        <p>Pet Type: {petInfo.petType}</p>
        <p>Description: {petInfo.petDescription}</p>
        <p>Skill One: {petInfo.petSkillOne}</p>
        <p>Skill Two: {petInfo.petSkillTwo}</p>
        <p>Skill Three: {petInfo.petSkillThree}</p>
        <hr />
        <button className="btn btn-danger" onClick={deleteHandler}>Adopt {petInfo.petName}</button>

        </div>
    );
};

export default ShowPet;