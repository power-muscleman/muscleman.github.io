import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link as Scroll } from "react-scroll";
import { useEffect, useState } from "react";

export default function Banner() {
  const liClassName = "items-center";
  const linkClassName =
    "relative text-xl font-bold pt-[5px] hover:text-blue-300 cursor-pointer";
  const navStyle = "z-10";

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が特定の値を超えたらバナーを固定
      if (window.scrollY >= 540) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="gnav"
      className={
        isSticky ? `${navStyle} sticky top-0 border-b-2 bg-[#fffdfa]` : navStyle
      }
    >
      <div className={`pt-[15px] ${isSticky ? "mb-3" : ""}`}>
        <ul className="flex justify-evenly max-[425px]:grid max-[425px]:grid-cols-2 max-[425px]:place-items-center">
          <li className={liClassName}>
            <Scroll to="about" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faUser} className="pr-2" />
              about
            </Scroll>
          </li>

          <li className={liClassName}>
            <Scroll to="skils" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faPen} className="pr-2" />
              skils
            </Scroll>
          </li>

          <li className={liClassName}>
            <Scroll to="works" className={linkClassName} smooth={true}>
              <FontAwesomeIcon icon={faFolderOpen} className="pr-2" />
              works
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
