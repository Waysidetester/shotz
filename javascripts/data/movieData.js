const movieJson = () => {
    return new Promise ((resolve, reject) => {
        $.get("../../db/movie.json")
        .done((data) => {
           resolve(data.movie);
        })
        .fail((error) => {
             reject(error);
         });
        
    })
}

export default {movieJson};