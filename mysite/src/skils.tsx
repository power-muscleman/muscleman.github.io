export default function Skils() {
  const skilItemClassName = "flex justify-between w-[48%] mb-12";
  const skilImgClassName = "mr-3 w-[150px] h-auto";
  const skilNameClassName = "mb-[3px]";
  return (
    <section>
      <div className="inner">
        <h2 className="title">skil</h2>
        <div className="flex justify-between flex-wrap">
          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="html.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>HTML5</h3>
              <p>
                CSSと併用してWEBサイトの作成、LPの作成を行うことができます。
              </p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="css.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>CSS3</h3>
              <p>
                HTML5と合わせてWEBサイトの作成、LPの作成を行えます。
                <br />
                またレスポンシブデザインも行うことができます。
              </p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="javascript.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>JavaScript</h3>
              <p>説明説明説明</p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="typescript.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>TypeScript</h3>
              <p>説明説明説明</p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="react.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>React</h3>
              <p>説明説明説明</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
