import React, { useEffect, useState } from 'react';

const MediaGallery = ({ imageUrls, rawYouTubeUrl }) => {
  // manipulate YouTube URL if necessary
  const [embedYouTubeUrl, setEmbedYouTubeUrl] = useState('');
  useEffect(() => {
    console.log('useEffect is setting the embedYouTubeUrl');

    if (rawYouTubeUrl && rawYouTubeUrl.includes('embed')) {
      /**
       * if `rawYouTubeUrl` already contains 'embed', just set it
       */
      setEmbedYouTubeUrl(rawYouTubeUrl);
    } else if (rawYouTubeUrl) {
      /**
       * if `rawYouTubeUrl` doesn't contain 'embed', manipulate it
       * `embed` equals [`rawYouTubeUrl`, `watch code, if present, else empty`]
       */
      const embed = rawYouTubeUrl.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      setEmbedYouTubeUrl(
        `https://www.youtube.com/embed/${
          embed[1]
        }?autoplay=0&showinfo=0&controls=0`
      );
    }
  }, [rawYouTubeUrl]);

  const defaultYouTubeVideo = (
    <iframe
      title="project preview video"
      // width="100%"
      // height="350"
      src={`https://www.youtube.com/embed/gLdXxFS8BV4?autoplay=0&showinfo=0&controls=0`}
      frameBorder="0"
      allowFullScreen
    />
  );

  const handleSmallClick = event => {
    let index = event.target.getAttribute('data-index');
    console.log('index', index);
    setMediaList(previousState => {
      let arr = Array.from(previousState);
      let clicked = arr[index];
      arr[index] = arr[0];
      arr.shift();
      arr.unshift(clicked);
      console.log('handleSmallClick arr: ', arr);
      return arr;
    })
  };

  // create state to hold media list for displaying below
  const [mediaList, setMediaList] = useState([]);
  useEffect(() => {
    console.log('useEffect is setting mediaList');
    let arr = [];
    if (imageUrls && imageUrls[0]) {
      let copy = Array.from(imageUrls);
      // pull first three URLs from `copy`
      // then create `<div>`s from them
      arr = copy.splice(0, 3).map(item => (
        // <div className="img-one" key={item}>
        <img src={item} alt="Project" />
        // </div>
      ));
    }
    // place YouTube embed contain at beginning of list, if exists
    if (embedYouTubeUrl) {
      const youTubeContainer = (
        <iframe
          title="project preview video"
          width="100%"
          height="350"
          src={embedYouTubeUrl}
          frameBorder="0"
          allowFullScreen
        />
      );
      arr.unshift(youTubeContainer);
    }
    setMediaList(arr);
  }, [embedYouTubeUrl, imageUrls]);

  const smallGallery = mediaList
    .slice(1) // index 0 is in the `.big-gallery` div
    .map((item, index) => (
      <div className="img-one" key={index}>
        <div
          className="capture-click"
          data-index={index + 1}
          onClick={handleSmallClick}
        />
        {item}
      </div>
    ));

  return (
    <div className="media-display">
      <div className="big-gallery">
        {mediaList[0]}
      </div>
      {mediaList.length ? smallGallery : null}
    </div>
  );
};

export default MediaGallery;
