const locationJson = () => {
    return new Promise ((resolve, reject) => {
        $.get("../../db/locations.json")
        .done((data) => {
            resolve(data.locations);
        })
        .fail((error)=> {
            reject(error);
        });
    })
}

export default {locationJson};  