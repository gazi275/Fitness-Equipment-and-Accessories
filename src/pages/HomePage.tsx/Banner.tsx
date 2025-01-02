import videoSrc from '/5319755-uhd_3840_2160_25fps.mp4';

const Banner = () => {
  return (
    <div className="relative max-w-screen h-screen">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start px-24">
        <div className="text-white space-y-6">
          
          <h1 className="text-4xl md:text-8xl font-bold">
            Level Up Your Body <br /> <span className="text-red-500">At Home</span>
          </h1>
          <button className="bg-red-600 text-white px-6 py-3 text-lg uppercase tracking-wide font-semibold rounded-md shadow-lg hover:bg-red-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
