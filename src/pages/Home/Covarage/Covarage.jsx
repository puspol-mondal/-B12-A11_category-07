import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Covarage = () => {
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);

  return (
    <div className=" border w-full h-[800px]">
      <MapContainer
        className=" h-[800px]"
        center={[23.8103, 90.4125]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenter.map((center, i) => (
          <Marker key={i} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong>
              <p>{center.covered_area.join(", ")}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Covarage;
