function VideoPlayer() {
  return (
    <div>
      <input type="checkbox" id="videoPlayer" className="modal-toggle" />
      <label htmlFor="videoPlayer" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <iframe
            className="rounded-xl"
            loading="lazy"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/vyit-1zKsZ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </label>
    </div>
  );
}

export default VideoPlayer;
