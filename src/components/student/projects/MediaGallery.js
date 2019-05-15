import React, { useEffect, useState } from 'react';

const MediaGallery = ({ defaultYouTubeUrl, imageUrls, rawYouTubeUrl }) => {
	// manipulate YouTube URL if necessary
	const [embedYouTubeUrl, setEmbedYouTubeUrl] = useState('');
	useEffect(() => {
		console.log('useEffect is setting the embedYouTubeUrl');
		if (rawYouTubeUrl) {
			setEmbedYouTubeUrl(toEmbedYouTubeUrl(rawYouTubeUrl));
		} else if (defaultYouTubeUrl) {
			setEmbedYouTubeUrl(toEmbedYouTubeUrl(defaultYouTubeUrl));
		}
	}, [defaultYouTubeUrl, rawYouTubeUrl]);

	/**
	 * Takes in a YouTube video URL and returns the embed URL for the video
	 * `embed` equals [`rawYouTubeUrl`, `watch code, if present, else empty`]
	 * @param {String} url YouTube video URL
	 * @returns {Array} YouTube embed video URL
	 */
	function toEmbedYouTubeUrl(url) {
		if (url.includes('embed')) {
			return url;
		}
		const embed = url.match(
			/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
		);
		return `https://www.youtube.com/embed/${
			embed[1]
		}?autoplay=0&showinfo=0&controls=0`;
	}

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
		});
	};

	// create state to hold media list for displaying below
	const [mediaList, setMediaList] = useState([]);
	useEffect(() => {
		console.log('useEffect is setting mediaList');
		let arr = [];
		if (imageUrls && imageUrls[0]) {
			let copy = Array.from(imageUrls);
			// pull first three URLs from `copy`
			// then create `<img>`s from them
			arr = copy.splice(0, 3).map(item => <img src={item} alt="Project" />);
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
			<div className="big-gallery">{mediaList[0]}</div>
			<div className="gallery-caption">
				{/* <p>Description of this video or image etc here</p> */}
			</div>
			{mediaList.length ? smallGallery : null}
		</div>
	);
};

// return (
// 	<div className="media-display">
// 		<div className="big-gallery">{mediaList[0]}</div>
// 		{mediaList.length ? smallGallery : null}
// 	</div>
// );

MediaGallery.defaultProps = {
	defaultYouTubeUrl: ''
};

export default MediaGallery;
