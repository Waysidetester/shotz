import locationsData from "../data/locationsData.js";
import movieData from "../data/movieData.js";

const locationUsage = (locId) => {
    let counter = 0;
    movieData.movieJson().then((data) => {
        $.each(data, (i, movie) => {
            let checker = $.inArray(locId, movie.locations);
            if (checker > -1){
                counter = counter + 1;
                console.log(counter);
            }
        })
    })
    
};

const locationBuilder = (locations) => {
    $.each(locations, (i, o) => {
        $("#location-here").append(`<div class="card m-1 location" id="${o.locationId}">
        <img src="${o.img}" alt="${o.name}"/>
        <p class="title">${o.name}</p>
        <p>${o.tod}</p>
        <p class="address">${o.address}</p>
        </div>`);
        locationUsage(o.locationId);
        console.log("Next Location")
    })
};
const locCompExporter = () => {
    locationsData.locationJson()
    .then((locationsObj) => {
        locationBuilder(locationsObj);
    })
    .catch((error) => {
        console.error(error);
    })
};

export default {locCompExporter}