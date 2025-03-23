document.getElementById('new-cat-button').addEventListener('click', getCatPhoto);

function getCatPhoto() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catPhoto = data[0].url;
            document.getElementById('cat-photo').src = catPhoto;
        })
        .catch(error => console.error('Error fetching cat photo:', error));
}

// Load an initial cat photo when the page loads
getCatPhoto();
