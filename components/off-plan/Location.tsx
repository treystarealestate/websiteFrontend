import React from "react";

interface LocationProps {
  lat?: string; // Latitude as a number (optional for type safety)
  lng?: string; // Longitude as a number (optional for type safety)
}

const Location: React.FC<LocationProps> = ({ lat, lng }) => {
  if (!lat || !lng) {
    return <p className="text-para">Location data is not available.</p>;
  }

  return (
    <div className="map-container">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAZPWsdYbLZxMyr0_anX9B4QPOXS56QNLE&q=${lat},${lng}&zoom=15`}
        title="Office Location"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ border: 0, borderRadius: 15 }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Location;
