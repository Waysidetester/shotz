import locationsData from "../data/locationsData.js";
import movieData from "../data/movieData.js";

// const locationUsage = (locId) => {
//     let counter = 0;
//     movieData.movieJson().then((data) => {
//         $.each(data, (i, movie) => {
//             let checker = $.inArray(locId, movie.locations);
//             if (checker > -1){
//                 counter = counter + 1;
//                 return counter;
//             }  
//         })
//         console.log(counter);
//     })
//     return counter;
// };

const mapper = (locations) => {
    let newLocations = locations;
    
    return newLocations
}

const locationBuilder = (locations) => {
    $.each(locations, (i, o) => {
        $("#location-here").append(`<div class="card m-1 location" id="${o.locationId}">
        <img src="${o.img}" alt="${o.name}"/>
        <p class="title">${o.name}</p>
        <p>${o.tod}</p>
        <p class="address">${o.address}</p>
        <p>${o.movies.length}</p>
        </div>`);
        // console.log(o)
    })
};
const locCompExporter = () => {
    locationsData.locationJson()
    // .then((data) => {
    //     mapper(data);
    // })
    .then((locationsObj) => {
        movieData.movieJson().then((data) => {
            const newLocations = locationsObj.map((x) => {
                const newLocation = x;
                newLocation.movies = data.filter(movie => movie.locations.includes(x.locationId));
                return newLocation;
            });
            locationBuilder(newLocations);
        });
    })
    .catch((error) => {
        console.error(error);
    })
};

export default {locCompExporter}