const locationJson = () => {
    $.get("../../db/locations.json")
    .done((data) => {
        const locations = data.locations;
        $.each(locations, (i, o) => {
            $("#location-here").append(`<div>
            <img src="${o.img}" alt="${o.name}"/>
            <p>${o.name}</p>
            <p>${o.tod}</p>
            <p>${o.address}</p>
            </div>`);
        });
    })
    .fail((error)=> {
        console.error({error})
    });
}

export default {locationJson};  