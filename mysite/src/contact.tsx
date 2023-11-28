export default function Contact() {
  const contactItemClassName = "mr-[10px]";
  return (
    <section id="contact">
      <div className="mb-7">
        <div className="inner">
          <h2 className="title">contact</h2>
          <p className="mb-8 mx-auto text-center">
            お問い合わせは、
            <br className="hidden" />
            メールにてお願いいたします。
          </p>

          <div className="flex flex-col mx-auto items-center">
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
      </div>
    </section>
  );
}
