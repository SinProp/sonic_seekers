import './App.css';
import { Router } from "@reach/router";
import ShowArtist from './components/ShowArtist';
import UpdateArtist from './components/UpdateArtist';
import ArtistList from './components/ArtistList';
import ArtistForm from './components/ArtistForm';


// Rendering components through Main.Js in the views folder and reach router
function App() {
  return (
    <div>
      <Router>
        <ArtistList path="/" />
        <ArtistForm path="/new-artist" />
        <ShowArtist path="/artist/:_id" />
        <UpdateArtist path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
