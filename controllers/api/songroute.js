const { default: axios } = require("axios");
require("dotenv").config()
const router = require("express").Router()

// make axios call on line 5
router.post("/", async(req,res)=>{

   // const axios = require("axios");
console.log('over here', req.body)
    


// API GET for top 10 tracks theaudiodb
    const options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/track-top10.php',
      params: {s: req.body.artist},
      headers: {
        // APIKEY protected with environment variables
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
      }
    };

    
    axios.request(options).then(function (response) {
      console.log(response.data); 
      const trackNames = []
      for(let i=0; i < response.data.track.length; i++){
        trackNames.push(response.data.track[i].strTrack)
      }
      console.log(trackNames)
      res.send(trackNames)
    }).catch(function (error) {
      console.error(error);
    });


   // console.log(req.body) 
})

module.exports = router;