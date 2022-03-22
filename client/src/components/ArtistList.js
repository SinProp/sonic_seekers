import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useState, useEffect} from "react";
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const ArtistList = (props) => {
    const [artists, setArtists] = useState([]);


    useEffect(() => {
        axios
        .get("http://localhost:8000/api/artists")
        .then((response) => {
            console.log(response.data);
            setArtists(response.data);
        })
        .catch(err => console.log(err));
    }, []);


const deleteFilter = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/artists/${idFromBelow}`)
    .then(response => {
        console.log(response.data);
        setArtists(artists.filter((artist, index) => artist._id !== idFromBelow));
        navigate("/");

    })
    .catch(err => console.log(err));
}


    return (
    <div className="Main-background container text-center">
        

        <h1 className="App-name"> <span className="span">Sonic Seekers</span> </h1> 
        <h3> <span className=" App-name span">Seek Musical Talent</span></h3>
        <hr />
        <h2 className="text-center"><Link className="hyperlink-color" to="/new-artist"><i class="bi bi-person-plus-fill"></i> Add an Artist 
        </Link>
        </h2>        

        <table className="table table-hover table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Artist</th>
                    <th scope="col">Genre Preference</th>
                    <th scope="col">Main Skill</th>

                    <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {artists.map((artist) => {
                    return (
                    <tr key={artist._id}>
                            
                                <td>{artist.firstName}</td>
                                <td>{artist.preferredGenre}</td>
                                <td>{artist.mainSkill}</td>
                                <td >
                                <button className="btn button-align btn-danger" onClick={()=>deleteFilter(artist._id)}><i class="bi bi-trash"></i> Delete</button>
                                <button className="btn button-align btn-primary" onClick={()=>navigate(`/edit/${artist._id}`)}><i class="bi bi-pen"></i> Edit</button>
                                
                                </td>
                            
                                
                            </tr>
                            );
                    })}
            </tbody>
        </table>
        
            

        </div>
    );

}

export default ArtistList;