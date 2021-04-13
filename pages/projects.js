import Header from '../components/Header';

const Projects = () => {
  const info = require('../info.json');
  const infoArr = [];
  info.technical_skills.forEach((skill) => {
    infoArr.push(<li key={skill}>{skill}</li>);
  });
  return (
    <div>
      <Header />
      <h1>Veronica Stork</h1>
      <h2>Software Engineer & Technical Writer</h2>
      <section id="tech-skills">
        <h3>Technical Skills</h3>
        <ul>{infoArr}</ul>
      </section>
      <section>
        <h3>Relevant Work Experience</h3>
        <h4>
          Freelance - Technical Writer{' '}
          <span className="dates">March 2021 - present</span>
        </h4>
        <ul>
          <li>
            Write technical blogs and articles on software engineering topics
          </li>
          <li>Create relevant code examples and screenshots</li>
        </ul>
        <h4>
          Pine Plains Free Library - Head Librarian{' '}
          <span className="dates">January 2017 - March 2021</span>
        </h4>
        <ul>
          <li>Built and maintain library website using CMS and custom CSS</li>
          <li>
            Conducted children’s computer science workshops using Scratch &
            code.org
          </li>
        </ul>
        <h4>
          Tivoli Free Library - Program Coordinator{' '}
          <span className="dates">December 2012 - December 2016</span>
        </h4>
        <ul>
          <li>
            Coordinated a girls maker workshop where we made programmable light
            up tote bags using Adafruit Gemma microcontrollers
          </li>
          <li>Maintained library website using CMS</li>
        </ul>
      </section>
      <section>
        <h3>Open-Source Projects</h3>
        <h4>
          FaaSCompose -{' '}
          <span className="description">
            Open source GUI for interacting with IBM Cloud Functions
          </span>
        </h4>
        <ul>
          <li>
            Developed with NextJS in order to utilize simplified, file
            system-based routing and automatic configuration and bundling.
          </li>
          <li>
            Used Typescript to leverage static typing of variables in order to
            decrease the potential for errors and facilitate the debugging
            process
          </li>
          <li>
            Used Redux Toolkit to manage immutable state across multiple React
            components and eliminate the need for prop drilling
          </li>
        </ul>
        <h4>
          Ubiquitous Spoon -{' '}
          <span className="description">
            Recipe finder based on what’s in your fridge
          </span>
        </h4>
        <ul>
          <li>
            Used React-Router to create a single page application, decreasing
            render time, and improving user experience.
          </li>
          <li>
            Created NodeJS/Express server to interact easily with the database
            using custom-made middleware and leverage RESTful architecture.
          </li>
          <li>
            Configured Webpack to create a custom development environment,
            enable compilation using Babel, and to facilitate code
            maintainability.
          </li>
        </ul>
        <h4>
          Readstr -{' '}
          <span className="description">
            Random book recommendation generator
          </span>
        </h4>
        <ul>
          <li>
            Implemented PostgreSQL database in order to efficiently organize
            structured user and book data into tables and ensure ACID
            compliance.
          </li>
          <li>
            Used SASS to make a custom stylesheet in order to use nested syntax
            and variables, and create more maintainable code.
          </li>
          <li>
            Used React to create a modular component system that leverages the
            virtual DOM and lifecycle methods to deliver a fast, responsive UI
          </li>
        </ul>
        <h4>
          LearnVault -{' '}
          <span className="description">
            Tool for curating, discovering, and sharing links to software
            engineering resources
          </span>
        </h4>
        <ul>
          <li>
            Used Enzyme and Jest to create custom tests to verify proper
            rendering of components and confirm proper functioning of middleware
          </li>
          <li>
            Built with MongoDB in order to store data in a lightweight
            non-relational database that integrates well with Node and React.
          </li>
        </ul>
      </section>
      <section>
        <h3>Frontend Projects</h3>
        <p>Coming Soon</p>
      </section>
      <section>
        <h3>Workshops & Talks</h3>
        <ul>
          <li>
            “JavaScript Design Patterns” - Public talk, SingleSprout’s Speaker
            Series
          </li>
          <li>
            “Storytelling” & “Music & Sound” - Used Scratch and Google’s CS
            First curriculum to teach computer science concepts to 2nd-5th
            graders
          </li>
        </ul>
      </section>
      <section>
        <h3>Articles</h3>
        <p>coming soon</p>
      </section>
      <section>
        <h3>Education</h3>
        <h4>
          Codesmith -{' '}
          <span className="degree">Software Engineering Intensive</span>
        </h4>
        <p>
          Nine-month long program in which I gained in-depth knowledge of
          software engineering theories and web development practices
        </p>
        <h4>
          Syracuse University -{' '}
          <span className="degree">MS, Library & Information Science</span>
        </h4>
        <p>
          Studied a range of topics related to library management, cataloging,
          social media outreach/marketing, accessible web design, digital
          libraries, etc.
        </p>
        <h4>
          SUNY Albany -{' '}
          <span className="degree">
            BA, East Asian Studies, Computer Science (minor)
          </span>
        </h4>
        <p>
          East Asian Studies: Focused on Japanese language and literature. Spent
          2 months in Kanazawa, Ishikawa, Japan through Princeton-in-Ishikawa
          program
        </p>
        <p>
          Computer Science: Studied data structures, discrete structures, using
          C++. Also: Database Administration, Linux/UNIX
        </p>
      </section>
      <section>
        <h3>Interests</h3>
      </section>
    </div>
  );
};

export default Projects;
