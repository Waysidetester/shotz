import locationsData from "../data/locationsData.js";

const locationBuilder = (locations) => {
    $.each(locations, (i, o) => {
        $("#location-here").append(`<div class="card m-1" id="${o.locationId}">
        <img src="${o.img}" alt="${o.name}"/>
        <p class="title">${o.name}</p>
        <p>${o.tod}</p>
        <p class="address">${o.address}</p>
        </div>`);
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