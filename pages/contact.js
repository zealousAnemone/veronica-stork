import Head from 'next/head';

const Contact = () => {
  return (
    <div id="contact-me">
      <Head>
        <title>Contact me</title>
      </Head>
      <h1>Contact Me</h1>
      <div className="card">
        <p>
          {' '}
          Send me an email if you'd like, or let's connect elsewhere. We can
          talk about software engineering, writing, and/or our cats!
        </p>

        <div id="contact-methods">
          <p>Email: veronica.stork@gmail.com</p>
          <a href="https://twitter.com/veewren">Twitter</a>
          <a href="https://github.com/zealousAnemone">Github</a>
          <a href="https://www.linkedin.com/in/veewren/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
