import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./Imageslider";

// Function to Display date 
const formatDateAdded = (dateAdded) => {
  const dateObject = new Date(dateAdded);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return dateObject.toLocaleDateString('en-US', options);
};

// Intoduction box property details
const PropertyDetail = ({ property, onClose }) => {
  const formattedDateAdded = formatDateAdded(property.dateAdded);
  const image = property.image;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          X
        </button>
        <div className="Model-intro">
          <h2>{property.title}</h2>
          {image && image.length > 0 && (
            <div className="image-slider">
              <ImageSlider image={image} />
            </div>
          )}
          <p>Type: {property.type}</p>
          <p>Price: ${property.price}</p>
          <p>Description: {property.description}</p>
          <p>No. of Bedrooms: {property.bedrooms}</p>
          <p>Postal code: {property.postalCode}</p>
          <p>Location: {property.location}</p>
          <p>Accommodation: {property.accommodation}</p>
          <p>Date Added: {formattedDateAdded}</p>
        </div>
      </div>
    </div>
    
  );
};

export default PropertyDetail;

