const searchBar = (temp) => {
    if (temp.keyCode === 13){
    $(".card").show()
    let searchParam = $("#search-box").val();
    let title = $(".card").find($(".title"));
    let address = $(".card").find($(".address"));

    if (title.not(`:contains(${searchParam})`) || address.not(`:contains(${searchParam})`) !== true) {
        console.log("does this work?")
    };
    }
}
const searchEvent = () => {
    $("#search-box").on("keyup", (e) => {
        searchBar(e);
    })
}

export default {searchEvent};