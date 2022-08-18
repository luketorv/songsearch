var searchInput = document.querySelector('#artist-search').value.trim();
var searchButton = document.querySelector('#search-btn');
var songList = document.querySelector('#song-list')

// Inputting search value to API return as a string 
// POST route
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
  
   };


document
.querySelector('.search-form')
.addEventListener('submit', searchFormHandler);