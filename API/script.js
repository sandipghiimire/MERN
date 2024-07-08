document.addEventListener("DOMContentLoaded", function() {
    const ACCESS_KEY = 'mGq-ilFFXqWUoXfTTv3PwNgUkVLMp8iBniTbRmmBzr4'; // Replace with your Unsplash API Access Key
    const generateButton = document.getElementById('generate-button');
    const imageContainer = document.getElementById('image-container');

    generateButton.addEventListener('click', function() {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.urls.regular;
                imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Image">`;
            })
            .catch(error => {
                console.error('Error fetching the image:', error);
            });
    });
});
