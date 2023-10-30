import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section id="about">
      <div>
        <h2 className="title">about</h2>
      </div>

      <div className="flex max-w-[800px] mx-auto">
        <img
          src="/pose_dance_ukareru_man.png"
          alt="自己紹介写真"
          className="rounded-[50%] object-scale-down"
        />

        <div className="text-xl leading-relaxed pt-8">
          <p>
            名前：やすだ ともや
            <br />
            大卒の2年目エンジニアです。主にWeb系の技術を扱っています。
            <p>趣味は野球・筋トレ・ドライブです</p>
            <p>
              <FontAwesomeIcon icon={faGithub} className="pr-3" size="lg" />:
              <a
                href="https://github.com/power-muscleman"
                className="text-sky-500 hover:text-sky-700"
              >
                @power-muscleman
              </a>
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}
