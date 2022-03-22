const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required:[true, "This artist needs a name!"],
        minlength: [4, "This artist's name should be at least 4 characters long"],
    },

    preferredGenre: {
        type: String,
        required:[true, "You must choose a genre"],
        minlength: [3, "The genre should be at least 3 characters long"],
    },

    mainSkill: {
        type: String,
        required:[true, "Tell us where you are most effective"],
        minlength: [5, "The skill description should be at least 5 characters long"],
        },
    });





const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;


