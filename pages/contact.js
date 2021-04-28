import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <section>
        Send me an email if you'd like, or let's connect elsewhere. We can talk
        about software engineering and/or our cats!
        <div id="contact-methods">
          <p>Email: veronica.stork@gmail.com</p>
          <a href="https://twitter.com/veewren">Twitter</a>
          <a href="https://github.com/zealousAnemone">Github</a>
          <a href="https://www.linkedin.com/in/veewren/">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
