export default function Skils() {
  const skilItemClassName =
    "flex justify-between mb-12 max-sm:flex-wrap max-lg:flex-col max-lg:place-items-center lg:w-[48%]";
  const skilImgClassName = "mr-3 w-[150px] h-auto";
  const skilNameClassName = "mb-[3px] font-bold text-lg";
  return (
    <section id="skils">
      <div className="inner">
        <h2 className="title">skils</h2>
        <div className="flex justify-around flex-wrap max-lg:flex-col max-lg:items-center">
          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="html.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>HTML5</h3>
              <p>
                基本的なタブ構造の理解。CSSと併用してWEBサイトの作成、LPの作成を行うことができます。
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
              <p>
                イベントやオブジェクトの理解を持ちつつ、サイト作成や動作処理を開発しています。
                <br />
                まだまだ理解が足りないので精進しています。
              </p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="typescript.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>TypeScript</h3>
              <p>
                基本的に普段はTypeScriptとこの後のReactを用いて開発しています。型付けなども勉強中です。
              </p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="react.png" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>React</h3>
              <p>
                TypeScriptとReactを用いて開発をしています。State処理やフックの使い方を理解しています。
              </p>
            </div>
          </div>

          <div className={skilItemClassName}>
            <p className={skilImgClassName}>
              <img src="tool.jpg" alt="" />
            </p>
            <div className="flex-1">
              <h3 className={skilNameClassName}>ツール</h3>
              <p>
                Slackはチーム・お客様とのやりとりで頻繁に使用していたため利用は苦でないです。
                <br />
                Githubもチームでのプロジェクト管理で使用しているので慣れています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
