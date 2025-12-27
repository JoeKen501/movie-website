const API_KEY = "PASTE_YOUR_API_KEY_HERE";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// fetch movies function
async function fetchMovies(endpoint, containerId) {
    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    const data = await res.json();

    const container = document.getElementById(containerId);

    data.results.forEach(movie => {
        if (movie.poster_path) {
            const img = document.createElement("img");
            img.src = IMG_URL + movie.poster_path;
            img.alt = movie.title;

            img.onclick = () => {
                alert(`${movie.title}\n\n${movie.overview}`);
            };

            container.appendChild(img);
        }
    });
}

// LOAD MANY MOVIES
fetchMovies("/trending/movie/week", "trending");
fetchMovies("/movie/top_rated", "toprated");
fetchMovies("/discover/movie?with_genres=28", "action");
fetchMovies("/discover/movie?with_genres=35", "comedy");
fetchMovies("/discover/movie?with_genres=27", "horror");
