import Head from 'next/head';

const About = () => {
  //Writer
  // Authentic
  // Social justice, equity
  // compassionate

  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
      <h1>About Me</h1>
      <img
        src="/antelope-island.jpg"
        height={400}
        alt="Me on Antelope Island in Utah"
        className="about-photo"
      />
      <p>
        My name is Veronica and I am a technical writer based out of upstate New
        York. I've written since I was a kid, and written code since I was a
        teenager. I love taking complicated concepts and making them accessible
        to users and developers.
      </p>
      <p>
        I wasn't always a technical writer. I spent eight years working in
        public libraries in a variety of roles. People sometimes think that
        library work is all reading books, but that couldn't be further from the
        truth. Actually, you need a lot of the same skills in a modern library
        as you do working as a technical writer:
      </p>
      <ol>
        <li>Patience in understanding what users want and need</li>
        <li>
          Ability to explain software and hardware to people in a way that makes
          sense
        </li>
        <li>A talent for research!</li>
      </ol>
      <p>
        Originally, technically writing was supposed to be a stepping stone
        between library work and becoming a full time software developer. I have
        written non-technical content on a freelance basis for years. After
        completing a software engineering bootcamp and having a baby at the same
        time, I picked up some technical writing work as a way to keep my
        engineering skills fresh while making a bit of money on the side. It
        turns out I really like technical writing, so I decided to do this
        instead of pure engineering.
      </p>
      <p>
        When I'm not writing or coding, I enjoy being outdoors hiking, cycling,
        swimming or bird watching. I also love spending time with my family and
        my cats. When I want to relax, I enjoy reading and listening to music.
        My favorite author is Cormac McCarthy but I also love Francesca Lia
        Block, Philip K. Dick, and Terry Pratchett, to name a few. My favorite
        bands and artists include nine inch nails, Rammstein, KMFDM, and Leonard Cohen.
      </p>
    </div>
  );
};

export default About;
