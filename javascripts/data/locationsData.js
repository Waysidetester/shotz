const locationJson = () => {
    $.get("../../db/locations.json")
    .done((data) => {
        const locations = data.locations;
        $.each(locations, (i, o) => {
            $("#location-here").append(`<div class="card">
            <img src="${o.img}" alt="${o.name}"/>
            <p class="title">${o.name}</p>
            <p>${o.tod}</p>
            <p class="address">${o.address}</p>
            </div>`);
        });
    })
    .fail((error)=> {
        console.error({error})
    });
}

export default {locationJson};  