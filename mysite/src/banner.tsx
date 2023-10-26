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
              works
            </a>
          </li>
          <li className={liClassName}>
            <a href="#skils" className={linkClassName}>
              skils
            </a>
          </li>
          <li className={liClassName}>
            <a href="#about" className={linkClassName}>
              about
            </a>
          </li>
          <li className={liClassName}>
            <a href="#contact" className={linkClassName}>
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
