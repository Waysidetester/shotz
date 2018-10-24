import locationComponent from "./components/locationComponent.js";
import movieComponent from "./components/movieComponent.js";
import events from "./events.js";

const init = () => {
    movieComponent.movCompExporter();
    locationComponent.locCompExporter();
    events.eventApplyer();
}

init();