import { nanoid } from '@reduxjs/toolkit';
import { Button } from '@mui/material';

export default function SearchGallery({ dogImages, changePage }) {
  return (
    <>
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
      <Button
        sx={{ marginLeft: '650px', marginTop: '30px' }}
        variant="contained"
        onClick={changePage}
      >
        Load more
      </Button>
    </>
  );
}
