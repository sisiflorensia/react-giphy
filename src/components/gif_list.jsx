import React from 'react';

import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  // callback functio
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => {
        return <Gif id={id} key={id} selectGif={selectGif} />;
      })}
    </div>
  );
};

export default GifList;
