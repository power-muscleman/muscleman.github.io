import About from "./about";
import Banner from "./banner";
import Contact from "./contact";
import Header from "./header";
import Skils from "./skils";
import Works from "./works";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skils />
      <Works />
      <Contact />
      <a onClick={ScrollToTop} className="cursor-pointer flex justify-end">
        <FontAwesomeIcon icon={faCircleUp} size="5x" />
      </a>
    </>
  );
}

function ScrollToTop() {
  const option = { duration: 500, smooth: true };
  return animateScroll.scrollToTop(option);
}
