import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Banner() {
  const liClassName = "items-center";
  const linkClassName =
    "relative text-xl font-bold pt-[5px] hover:text-blue-300";
  return (
    <nav className="z-10 w-auto">
      <div className="pt-[15px] pr-10">
        <ul className="flex justify-evenly text-">
          <li className={liClassName}>
            <a href="#works" className={linkClassName}>
              <FontAwesomeIcon icon={faFolderOpen} className="pr-2" />
              works
            </a>
          </li>
          <li className={liClassName}>
            <a href="#skils" className={linkClassName}>
              <FontAwesomeIcon icon={faPen} className="pr-2" />
              skils
            </a>
          </li>
          <li className={liClassName}>
            <FontAwesomeIcon icon={faUser} className="pr-2" />
            <a href="#about" className={linkClassName}>
              about
            </a>
          </li>
          <li className={liClassName}>
            <a href="#contact" className={linkClassName}>
              <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
