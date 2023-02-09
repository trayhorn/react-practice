import InfiniteScroll from 'react-infinite-scroll-component';
import { nanoid } from '@reduxjs/toolkit';

export default function SearchGallery({ fetchMoreData, hasMore, currentPageData }) {
  return (
    <InfiniteScroll
      dataLength={currentPageData.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="galleryBox">
        {currentPageData.map(imageUrl => (
          <div key={nanoid()} className="imageWrapper">
            <img
              className="dogImage"
              src={imageUrl}
              alt="the cutest dog ever"
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
