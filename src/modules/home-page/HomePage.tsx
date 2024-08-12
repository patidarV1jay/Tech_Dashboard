import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import "./HomePageStyles.css";
import Bluegrid from "/blue-grid.png";
import BooksStack from "/books-stack.png";
import FloatingIcons from "/home-banner.png";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import icon4 from "/icon4.png";
import icon5 from "/icon5.png";
import PersonImage from "/logo.png";
import Scholarboy from "/scholar-boy.png";

const HomePage = () => {
  // const [rotation, setRotation] = useState(0);

  // const handleMouseMove = (e) => {
  //   const { top, height } = e.currentTarget.getBoundingClientRect();
  //   const mouseY = e.clientY - top;

  //   const rotateValue = (mouseY / height - 0.5) * 20;
  //   setRotation(rotateValue);
  // };

  // const handleMouseLeave = () => {
  //   setRotation(0);
  // };

  return (
    <div>
      <section>
        <div className="hero-container">
          <div className="hero-left">
            <img src={FloatingIcons} className="floating-icon" />
            <p className="regular-spaced-text">Education Solution</p>
            <div>
              <h1 className="bold-text">Cloud Based LMS</h1>
              <h1 className="bold-text">Trusted By 1000+</h1>
            </div>
            <p className="regular-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, labore?
            </p>
            <div className="button-container">
              <button className="view-courses-button">View Courses</button>
              <button className="arrow-button">
                Find Our More
                <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
          <div>
            <img src={PersonImage} alt="Movable" className="personImage" />
          </div>
        </div>
      </section>
      <section>
        <div className="white-banner">
          <img src={icon1} alt="" className="banner-image" />
          <img src={icon2} alt="" className="banner-image" />
          <img src={icon3} alt="" className="banner-image3" />
          <img src={icon4} alt="" className="banner-image" />
          <img src={icon5} alt="" className="banner-image5" />
        </div>
      </section>
      <section>
        <div className="scholar-container">
          <div className="scholar-container-left">
            <img src={Bluegrid} alt="" className="blue-grid" />
            <img src={Scholarboy} alt="" className="scholar-boy" />
            <div className="experience-card">
              <p className="experience-number">25+</p>
              <p className="experience-text">Years Experienced Just Acheived</p>
            </div>
            <img src={BooksStack} alt="" className="book-stack" />
          </div>
          <div className="scholar-container-right">
            <span className="aboutus">About Us</span>
            <h2 className="online-text">
              Welcome To The Online Learning Center
            </h2>
            <p className="border-left-text">
              25+Contrary to popular belief, Lorem Ipsum is not simply random
              text roots in a piece of classical Latin literature from 45 BC
            </p>
            <p className="check-text">
              <FaCheck className="check-icon" /> Lorem Ipsum is simply dummy
            </p>
            <p className="check-text">
              <FaCheck className="check-icon" /> Explore a variety of fresh
              educational teach
            </p>
            <p className="check-text">
              <FaCheck className="check-icon" />
              Lorem Ipsum is simply dummy text of
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
