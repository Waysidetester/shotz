import locationComponent from "./components/locationComponent.js";
import movieComponent from "./components/movieComponent.js";
import movieData from "./data/movieData.js";
import events from "./events.js";

const init = () => {
    locationComponent.locCompExporter();
    movieComponent.testPage();
    movieData.movieJson();
    events.eventApplyer();
}

init();