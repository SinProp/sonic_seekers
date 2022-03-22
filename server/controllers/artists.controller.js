const Artist = require("../models/artist.model");

const addArtist = (req, res) => {
    Artist.create(req.body)
        .then(newArtist => res.json(newArtist))
        .catch((err) => res.status(400).json({err}));
    };
const getAllArtists = (req, res) => {
    Artist.find()
    .then((allArtists) => res.json(allArtists))
    .catch((err) => res.status(400).json({err}));
};

const getArtistById = (req, res) => {
    Artist.findOne({ _id: req.params._id })
    .then((targetArtist) => res.json(targetArtist))
    .catch((err) => res.status(400).json({err}));
};

const deleteArtist= (req, res) => {
    Artist.deleteOne({ _id: req.params._id })
    .then((erasedArtist) => res.json(erasedArtist))
    .catch((err) => res.status(400).json({err}));
};

const updateArtist = (req, res) => {
    Artist.findOneAndUpdate({ _id: req.params._id}, 
        req.body, 
        {
        new: true,
        runValidators: true,
        })
        .then(updatedArtist => res.json(updatedArtist))
        .catch((err) => res.status(400).json({err}));
    };


module.exports = {
    addArtist,
    getAllArtists,
    getArtistById,
    deleteArtist,
    updateArtist,
}