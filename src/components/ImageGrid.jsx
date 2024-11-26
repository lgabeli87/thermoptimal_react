import React, { useState } from 'react';

const categoryImages = {
  hoszivattyu: import.meta.glob('/src/hoszivattyu/*.jpg'),
  szellozteto: import.meta.glob('/src/szellozteto/*.jpg'),
  ujepites: import.meta.glob('/src/ujepites/*.jpg'),
  felujitas: import.meta.glob('/src/felujitas/*.jpg')
  // Add other categories as needed
};

export default function ImageGrid({ category }) {
  const images = categoryImages[category] || {};
  const imagesArr = [];
  for (const path in images) {
    imagesArr.push(path);
  }

  // State to handle selected image and modal visibility
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal with the clicked image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Function to go to the next image in the array
  const nextImage = () => {
    if (selectedImageIndex < imagesArr.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Function to go to the previous image in the array
  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

    // Function to extract the filename without the last 7 characters (3 from the filename + 4 for ".jpg")
    const getFilename = (url) => {
        const filename = url.split('/').pop();  // Get the file name with extension
        return filename.slice(0, -7);  // Remove the last 7 characters (".jpg" + 3 characters from filename)
      };

  return (
    <div>
      <div className="image-grid">
        {imagesArr.map((url, index) => (
          <div key={index} className="image-item" onClick={() => openModal(index)}>
            <img src={url} alt={`Image ${index}`} />
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected image */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-image">
              <img src={imagesArr[selectedImageIndex]} alt={`Selected Image ${selectedImageIndex}`} />
            </div>
            {/* Prev and Next buttons as overlays */}
            <button className="prev" onClick={prevImage} disabled={selectedImageIndex === 0}>
              &lt;
            </button>
            <button className="next" onClick={nextImage} disabled={selectedImageIndex === imagesArr.length - 1}>
              &gt;
            </button>

            {/* Display the filename under the image */}
            <div className="image-filename">
              {getFilename(imagesArr[selectedImageIndex])}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
