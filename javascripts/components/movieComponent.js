import movieData from "../data/movieData.js";

const movieBuilder = (movies) => {
    $.each(movies, (i, o) => {
        $("#movie-here").append(`<div class="card m-1" id="${o.movieId}">
        <p class="title">${o.name}</p>
        <p>${o.genre}</p>
        <p>${o.release}</p>
        <p>${o.description}</p>
        </div>`);
    })
};

const movCompExporter = () => {
    movieData.movieJson().then((movies) => {
        movieBuilder(movies);
    })
}

export default {movCompExporter};