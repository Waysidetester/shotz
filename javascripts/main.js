import locationComponent from "./components/locationComponent.js";
import movieComponent from "./components/movieComponent.js";
import locaitionData from "./data/locationsData.js";
import movieData from "./data/movieData.js";
import events from "./events.js";

const init = () => {
    locationComponent.testPage();
    movieComponent.testPage();
    locaitionData.locationJson();
    movieData.movieJson();
    events.testPage();
    console.log("Main works");
}

init();