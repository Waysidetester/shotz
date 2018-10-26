import movieData from "../data/movieData.js";
import events from "../events.js"

const movieBuilder = (movies) => {
    $.each(movies, (i, o) => {
        $("#movie-here").append(`<div class="card m-1 movie" id="${o.movieId}">
        <p class="title">${o.name}</p>
        <p>${o.genre}</p>
        <p>${o.release}</p>
        <p>${o.description}</p>
        </div>`);
        events.movieDetail(o);
    })
};

const movCompExporter = () => {
    movieData.movieJson().then((movies) => {
        movieBuilder(movies);
    }).catch((error) => {
        console.log(error);
    })
}

export default {movCompExporter};