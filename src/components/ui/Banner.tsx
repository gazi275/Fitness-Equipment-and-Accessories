import videoSrc from '../../../public/5319755-uhd_3840_2160_25fps.mp4'

const Banner = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full  object-cover"
      />
    </div>
  );
};

export default Banner;
