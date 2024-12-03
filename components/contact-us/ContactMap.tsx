import React from "react";

const ContactMap = () => {
  return (
    <div className="map-container">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1266001398944!2d55.17853027622672!3d25.097575477775234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb088ca6bb7%3A0x7ea961b8ac7b6af6!2sI%20Rise%20Tower!5e0!3m2!1sen!2sae!4v1733241245026!5m2!1sen!2sae"
        title="Office Location"
        width="100%"
        height="350"
        frameBorder="0"
      
      style={{ border: 0, borderRadius:15 }} allowFullScreen loading="lazy"></iframe>
    </div>
  );
};

export default ContactMap;
