export default function Works() {
  const worksItemsClassName = "w-[31.8%] mb-10 hover:opacity-90";
  const worksImgClassName = "border border-solid border-[#e6e6e6]";
  const worksNameClassName = "text-sm font-bold mt-2";
  const worksInfoClassName = "text-[10px] text-sky-500 hover:text-sky-700";
  return (
    <section id="works">
      <div className="inner">
        <h2 className="title">works</h2>

        <div className="flex">
          <div>
            <a className={worksItemsClassName} href="works.html">
              <p className={worksImgClassName}>
                <img src="coming-soon.jpeg" alt="" />
              </p>
            </a>
            <p className={worksNameClassName}>ポモドーロ・テクニックサイト</p>
            <a className={worksInfoClassName} href="">
              githubのリンク
            </a>
          </div>

          <div className="ml-3">
            <a className={worksItemsClassName}>
              <p className={worksImgClassName}>
                <img src="coming-soon.jpeg" alt="" />
              </p>
            </a>
            <p className={worksNameClassName}>Coming Soon...</p>
            <a className={worksInfoClassName} href="">
              githubのリンク
            </a>
          </div>

          <div className="ml-3">
            <a className={worksItemsClassName}>
              <p className={worksImgClassName}>
                <img src="coming-soon.jpeg" alt="" />
              </p>
            </a>
            <p className={worksNameClassName}>Coming Soon...</p>
            <a className={worksInfoClassName} href="">
              githubのリンク
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
