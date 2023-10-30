import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link as Scroll } from "react-scroll";

export default function Banner() {
  const liClassName = "items-center";
  const linkClassName =
    "relative text-xl font-bold pt-[5px] hover:text-blue-300 cursor-pointer";
  return (
    <nav className="z-10 w-auto">
      <div className="pt-[15px] pr-10">
        <ul className="flex justify-evenly text-">
          <li className={liClassName}>
            <Scroll to="works" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faFolderOpen} className="pr-2" />
              works
            </Scroll>
          </li>
          <li className={liClassName}>
            <Scroll to="skils" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faPen} className="pr-2" />
              skils
            </Scroll>
          </li>
          <li className={liClassName}>
            <Scroll to="about" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faUser} className="pr-2" />
              about
            </Scroll>
          </li>
          <li className={liClassName}>
            <Scroll to="contact" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
              contact
            </Scroll>
          </li>
        </ul>
      </div>
    </nav>
  );
}
