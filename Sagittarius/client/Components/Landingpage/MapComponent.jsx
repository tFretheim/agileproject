import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import "../../assets/styles/landingpage.css";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Overlay from "ol/Overlay";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import markerImage from "../../assets/images/icons8-marker-48.png";

// This is the MapComponent, which is used in the landing page.
const MapComponent = () => {
  // useEffect here to run the map
  useEffect(() => {
    const centerCoordinates = fromLonLat([10.7120137, 59.9302158]);

    // Creates a new Feature with a Point geometry at the center coordinates
    const marker = new Feature({
      geometry: new Point(centerCoordinates),
    });

    // Creates a VectorSource
    const vectorSource = new VectorSource({
      features: [marker],
    });

    // This creates a new VectorLayer using the VectorSource.
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    //Creates the map with tile and vector layer
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: centerCoordinates,
        zoom: 12,
      }),
    });

    // This defines the style for the marker, which is an image/icon
    const markerStyle = new Style({
      image: new Icon({
        src: markerImage,
        scale: 0.5,
      }),
    });

    marker.setStyle(markerStyle);

    // Creates the overlay which presents additional information around the marker
    const overlay = new Overlay({
      position: centerCoordinates,
      positioning: "bottom-left",
      offset: [0, -15], // Adjust the offset to add more space
      element: document.createElement("div"),
    });

    overlay.getElement().innerHTML =
      '<div class="marker-container">' +
      '<div class="marker-textbox">KPMG, Oslo</div>' +
      "</div>";

    map.addOverlay(overlay);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px" }}
      className="ol-grab ol-dragging"
    ></div>
  );
};

export default MapComponent;
