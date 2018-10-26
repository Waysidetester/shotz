import locationComponent from "./components/locationComponent.js";
import movieComponent from "./components/movieComponent.js";

const searchBar = (temp) => {
    if (temp.keyCode === 13){
        // Shows all cards if any were previously set to hide
        $(".card").show();
        // input value
        let searchParam = $("#search-box").val();
        // loops over each card
        $.each($(".card"), (i, v) => {
            let cardNotValidator = false;
            // returns array with length of 2. Contains the title and address of the current location
            let cardChecker = $(v).find(".title, .address");
            // checks title and address separatly
            $.each($(cardChecker), (j, tag) => {
                // if the input matches the search, the length below will be 0
                if ($(tag).not(`:contains(${searchParam})`).length === 0) {
                    // make cardNotValidator true if search matches location data
                    cardNotValidator = true;
                }    
            });
            // if variable isn't set to true, hide the card being iterated over
            if (cardNotValidator !== true) {
                $(v).hide();
            }
    })
    $("#search-box").val('');
    $("#search-box").blur();
    }
}

const searchEvent = () => {
    $("#search-box").on("keyup", (e) => {
        searchBar(e);
    })
}

const timeFilter = () => {
    $(".time").on("click", (e) => {
        $(".card").show();
        let tod = $(e.currentTarget).text().toLowerCase();
        $(".card").not(`:contains(${tod})`).hide();
    })
}

const locationLooper = (movieLocations) => {
    $.each($(".location"), (i, location) => {
        $.each($(movieLocations), (j, locationId) => {
            if(locationId === location.id) {
                $(location).show();
            }
        })
    })
}

const reInit = () => {
    defaultFilter();
    locationComponent.locCompExporter();
    movieComponent.movCompExporter();
    eventApplyer();
}

const pageRefresh = () => {
    $("#filters").html(`<button class="btn btn-danger" id="restart">X</button>`);
    $("#restart").on("click", reInit);
}

const replaceMovie = (target) => {
    pageRefresh();
    const movieCard = target.currentTarget
    $("#movie-here").html(movieCard);
    $(movieCard).removeClass("card");
};

const movieDetail = (movie) => {
    $(`#${movie.movieId}`).on("click", (e) => {
        $(".location").hide();
        replaceMovie(e);
        locationLooper(movie.locations);
    })
};

const defaultFilter = () => {
    $("#init").html(`
    <div id="filters">
        <input type="text" placeholder="search locations" id="search-box"/>
        <button type="button" class="btn btn-dark time">Morning</button>
        <button type="button" class="btn btn-dark time">Afternoon</button>
        <button type="button" class="btn btn-dark time">Evening</button>
        <button type="button" class="btn btn-dark time">Night</button>
    </div>
    <div id="movie-here" class="d-flex flex-wrap justify-content-center"></div>
    <div id="location-here" class="d-flex flex-wrap justify-content-center"></div>`)
}


const eventApplyer = () => {
    searchEvent();
    timeFilter();
    
}

export default {eventApplyer, movieDetail, defaultFilter};