var searchInput = document.querySelector('#artist-search').value.trim();
var searchButton = document.querySelector('#search-btn');
var songList = document.querySelector('#song-list')

//searchButton.addEventListener('click', function() {
  //songList.innerHTML = ""
  //const artist = searchInput;
  //suggest(artist);
//});

// function suggest(artist) {

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'd42b412219mshb5caed087e2635ep1756a6jsn5b33a70215e1',
//       'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
//     }
//   };

//   fetch('https://theaudiodb.p.rapidapi.com/track-top10.php?s=' + artist, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
      
//       .then(function(data){

//           if (data.length < 1 ) {
//               searchList.innerHTML = "Sorry, No results found"
//           }
//           else{
//               for (let i = 0; i < data.length; i++) {
//                   suggest[i] = data[i].track.strTrack
//                   console.log(suggest[i])
//                   var sug = document.createElement('span');
//                   sug.innerHTML = suggest[i] + ". "
//                   songList.append(sug)
//               }
//           }  
//       });
// };

// suggest();

const searchFormHandler = async (event) => {
  event.preventDefault();
  const artist = document.querySelector('#artist-search').value;
  if (artist) {
    const response = await fetch('/api/songs', {
      method: 'POST',
      body: JSON.stringify({ artist }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const tracks = await response.json()
    const list = document.getElementById("song-list")
    tracks.forEach((track)=>{
      const songEl = document.createElement('li');
      songEl.appendChild(document.createTextNode(track))
      list.append(songEl)
    })
}
  
  //   if (response.ok) {
  //     console.log('response here', response);
  //     //document.location.replace('/results');
  //     const tracks = await response.json()
  //     console.log(tracks)
  //   } else {
  //     alert('Search Unsuccessful');
  //   }
   };


document
.querySelector('.search-form')
.addEventListener('submit', searchFormHandler);