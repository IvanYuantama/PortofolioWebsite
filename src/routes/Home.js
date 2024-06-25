import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" title="Ivan Yuantama Pradipta" text="Front End Developer" buttonText="Download CV" url="https://drive.google.com/file/d/1TVKuME8P_67eDrx7SatLCOtbS05WU_U3/view?usp=sharing" btnClass="show  forslide" />
    </>
  );
}

export default Home;
