var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

let apikey = process.env.MOVIEDB_API_KEY

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies : data.results});
   });
})

   module.exports = router;