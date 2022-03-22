const ArtistController = require("../controllers/artists.controller");


module.exports = (app) => {
    app.post('/api/artists', ArtistController.addArtist);
    app.get('/api/artists', ArtistController.getAllArtists);
    app.get('/api/artists/:_id', ArtistController.getArtistById);
    app.delete('/api/artists/:_id', ArtistController.deleteArtist);
    app.put('/api/artists/:_id', ArtistController.updateArtist)
};