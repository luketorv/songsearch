const { default: axios } = require("axios");

const router = require("express").Router()

// make axios call on line 5
router.post("/", async(req,res)=>{

const axios = require("axios");

//get
const options = {
  method: 'GET',
  url: 'https://theaudiodb.p.rapidapi.com/track-top10.php',
  params: {s: 'taylor swift'},
  headers: {
    'X-RapidAPI-Key': '2f88f713f2mshd21e7aa061f6ac9p10bf6fjsn1e99d0686455',
    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
  }
};


//post
//axios.post('')

function handleResult(data) {
    console.log(data)
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    
   // console.log(req.body) 
})

module.exports = router;