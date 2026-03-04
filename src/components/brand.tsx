import { Link } from "react-scroll";

const Brand = () => {
  return (
    <Link to="hero" spy={true} smooth={true} duration={500}>
      <img
        src="/images/pitchworks-logo.png"
        alt="PitchWorks Logo"
        className="h-auto w-auto"
        fetchPriority="high"
      />
    </Link>
  );
};

export default Brand;
