import locationComponent from "./components/locationComponent.js";
import movieComponent from "./components/movieComponent.js";
import events from "./events.js";

$.expr[':'].contains = function(a, i, m) {
    return $(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };

const init = () => {
    locationComponent.locCompExporter();
    movieComponent.movCompExporter();
    events.eventApplyer();
}

init();