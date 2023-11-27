import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section id="about">
      <div className="inner">
        <div>
          <h2 className="title">about</h2>
        </div>

        <div className="flex justify-center mx-auto max-[774px]:flex-wrap">
          <img
            src="/pose_dance_ukareru_man.png"
            alt="自己紹介写真"
            className="rounded-[50%] object-scale-down"
          />

          <div className="text-lg leading-relaxed pt-8">
            <div className="flex flex-wrap gap-x-10">
              <div>
                <div>NAME:</div>
                <div className="">
                  <FontAwesomeIcon icon={faGithub} className="pr-3" size="lg" />
                </div>
              </div>

              <div>
                <p>安田 智哉(yasuda tomoya)</p>
                <a
                  href="https://github.com/power-muscleman"
                  className="text-sky-500 hover:text-sky-700"
                >
                  @power-muscleman
                </a>
              </div>
            </div>

            <p className="pt-5">
              はじめまして。都内でSEをしています。やすだと申します。
              <br />
              法学部を卒業後、SEとしてSlerに入社して2年目になります。
              <br />
              業務ではWeb系技術を用いてフロントエンド、バックエンド両方を開発しています。
              <br />
              最近はAWSやPythonといった新しい技術所得にも努めています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
