const searchBar = (temp) => {
    if (temp.keyCode === 13){
    $(".card").show()
    let searchParam = $("#search-box").val();
    $(".card").not(`:contains(${searchParam})`).hide();
    }
}
const searchEvent = () => {
    $("#search-box").on("keyup", (e) => {
        searchBar(e);
    })
}

export default {searchEvent};