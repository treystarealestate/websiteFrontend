import React from "react";

const ContactMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        title="Office Location"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ border: 0, borderRadius:15 }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ContactMap;
