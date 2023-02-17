import { nanoid } from '@reduxjs/toolkit';

export default function SearchGallery({ dogImages }) {
  return (
    <div className="galleryBox">
      {dogImages.map(imageUrl => (
        <div key={nanoid()} className="imageWrapper">
          <img
            className="dogImage"
            src={imageUrl}
            alt="the cutest dog ever"
          />
        </div>
      ))}
    </div>
  );
}
