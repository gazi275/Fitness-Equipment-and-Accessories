import Banner from "../../pages/HomePage.tsx/Banner";
import Navbar from "../../pages/HomePage.tsx/Navbar";

import Footer from "../../pages/HomePage.tsx/Footer";
import HomeGymSection from "../../pages/HomePage.tsx/HomeGymSection";
import LowerBanner from './../../pages/HomePage.tsx/LowerBanner';
import TailwindCarousel from "../../pages/HomePage.tsx/Feature";




const MainLAyout = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <LowerBanner/>
      <HomeGymSection/>
      <TailwindCarousel/>
      <Footer/>
      
    </div>
  );
};

export default MainLAyout;