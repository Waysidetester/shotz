const movieJson = () => {
$.get("../../db/movie.json")
 .done((data) => {
    const movieObject = data.movie;
$("#movie-here").html(`<div>
<p>${movieObject.name}</p>
<p>${movieObject.genre}</p>
<p>${movieObject.description}</p>
<p>${movieObject.release}</p>
</div>`)
 })
 .fail((error) => {
      console.error({error});
  });
}

export default {movieJson};