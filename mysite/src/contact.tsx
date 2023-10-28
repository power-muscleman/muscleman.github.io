export default function Contact() {
  const contactItemClassName = "mr-[10px]";
  return (
    <section>
      <div className="inner">
        <h2 className="title">contact</h2>
        <p className="mb-8 mx-auto text-center">
          お問い合わせは、
          <br className="hidden" />
          SNSかメールにてお願いいたします。
        </p>

        <div className="flex flex-col mx-auto items-center">
          <a
            className={contactItemClassName}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
          >
            <img alt="Twitterアイコン画像" />
          </a>
          <p>twitter</p>
          <span className={contactItemClassName}>
            <p>下記メールアドレスをクリックするとメール画面に遷移します。</p>
            <a
              className="text-sky-500 hover:text-sky-700 mx-auto flex justify-center"
              href="mailto:suya44574@gmail.com"
            >
              suya44574@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
