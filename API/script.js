document.addEventListener("DOMContentLoaded", function() {
    const ACCESS_KEY = 'mGq-ilFFXqWUoXfTTv3PwNgUkVLMp8iBniTbRmmBzr4'; // Replace with your Unsplash API Access Key
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const imageContainer = document.getElementById('image-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value;
        fetchImages(query);
    });

    function fetchImages(query) {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`)
            .then(response => response.json())
            .then(data => {
                displayImages(data.results);
            })
            .catch(error => {
                console.error('Error fetching the images:', error);
            });
    }

    function displayImages(images) {
        imageContainer.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.regular;
            imgElement.alt = image.description || 'Unsplash Image';
            imageContainer.appendChild(imgElement);
        });
    }
});
