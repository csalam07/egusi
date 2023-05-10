function VideoBg() {
  return (
    <video
      className="video"
      width="1920"
      height="auto"
      poster="https://d258rkt6opqbpm.cloudfront.net/wp-content/uploads/2015/08/banner3_preview_640s.webp"
      preload="auto"
      loop
      autoPlay
      muted
    >
      <source
        type="video/webm"
        src="https://d258rkt6opqbpm.cloudfront.net/banner/egusihk_banner3.webm"
      />
      <source
        type="video/mp4"
        src="https://d258rkt6opqbpm.cloudfront.net/banner/egusihk_banner3.mp4"
      />
      <source
        type="video/ogg"
        src="https://d258rkt6opqbpm.cloudfront.net/banner/egusihk_banner3.ogv"
      />
    </video>
  );
}

export default VideoBg;
