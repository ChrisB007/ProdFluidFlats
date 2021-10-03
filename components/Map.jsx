import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ getData }) {
  const cord = getData.map((data) => ({
    longitude: data.long,
    latitude: data.lat,
  }));

  const [selected, setSelected] = useState({});

  const center = getCenter(cord);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/publictrades/cjuvnlcdo4aj51gpjzfae0q2k"
      mapboxApiAccessToken={process.env.MAP_BOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      {...viewport}
    >
      {getData.map((data) => (
        <div key={data.long}>
          <Marker
            longitude={data.long}
            latitude={data.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelected(data)}
              className="cursor-pointer text-2xl animate-pulse"
              aria-label="push-pin"
            >
              <img
                className="h-7"
                src="/images/placeholder.png"
                alt="push-pin"
              />
            </p>
          </Marker>
          {selected.long === data.long ? (
            <Popup
              className="pop-up rounded-lg"
              onClose={() => setSelected({})}
              closeOnClick={true}
              latitude={data.lat}
              longitude={data.long}
            >
              <span className="text-2xl font-semibold">{data.title}</span>
              <span className="block">{data.price}</span>
              <img className="h-60" src={`${data.img}`} alt="map pop-up" />
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
