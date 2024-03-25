import PropTypes from "prop-types";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex relative min-h-[calc(100vh-116px)]">
      <HomeIntro></HomeIntro>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

Home.propTypes = {};

export default Home;
