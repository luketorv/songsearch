const searchFormHandler = async (event) => {
    event.preventDefault();
  
    const artist = document.querySelector('#artist-search').value.trim();
  
    if (artist) {
      const response = await fetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({ artist }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/results');
      } else {
        alert('Search Unsuccessful');
      }
    }
  };


  document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);