document.getElementById('searchBtn').addEventListener('click', searchImages);

function searchImages() {
    const searchTerm = document.getElementById('searchInput').value;
    const apiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key
    const apiHost = 'real-time-image-search.p.rapidapi.com';
    const apiUrl = `https://${apiHost}/search?q=${searchTerm}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        data.value.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            resultsDiv.appendChild(imgElement);
        });
    })
    .catch(error => {
        console.error('Error fetching the image data:', error);
        document.getElementById('results').innerHTML = `Error fetching the image data.`;
    });
}
