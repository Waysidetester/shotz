const searchBar = (temp) => {
    if (temp.keyCode === 13){
        // Shows all cards if any were previously set to hide
        $(".card").show();
        // input value
        let searchParam = $("#search-box").val();
        // loops over each card
        $.each($(".card"), (i, v) => {
            let cardNotValidator = false;
            // returns array with length of 2. Contains the title and address of the current location
            let cardChecker = $(v).find(".title, .address");
            // checks title and address separatly
            $.each($(cardChecker), (j, tag) => {
                // if the input matches the search, the length below will be 0
                if ($(tag).not(`:contains(${searchParam})`).length === 0) {
                    // make cardNotValidator true if search matches location data
                    cardNotValidator = true;
                }    
            });
            // if variable isn't set to true, hide the card being iterated over
            if (cardNotValidator !== true) {
                cardNotValidator = false;
                $(v).hide();
            }
    })
    }
}
const searchEvent = () => {
    $("#search-box").on("keyup", (e) => {
        searchBar(e);
    })
}

export default {searchEvent};