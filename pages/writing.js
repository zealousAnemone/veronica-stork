import Head from 'next/head';

const Writing = () => {
  return (
    <div>
      <Head>
        <title>Writing portfolo</title>
      </Head>
      <h1>Technical Writing</h1>
      <div className="card">
        <h2>Low-Code/No-Code</h2>
        <ul>
          <li>
            <a href="https://blog.appsmith.com/the-complete-table-widget-building-complex-tables-with-appsmith">
              The Complete Table Widget: Building Complex Tables with Appsmith
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Headless CMS</h2>
        <ul>
          <li>
            <a href="https://strapi.io/blog/building-a-css-tricks-website-clone-with-strapi-next-js">
              How to Build a CSS Tricks Website Clone with Strapi and Next.js
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Node</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/">
              How to Use Node Environment Variables with a DotEnv File for
              Node.js and npm
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>APIs</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/news/graphql-vs-rest-benefits-and-code-example-comparisons/">
              GraphQL VS REST – Benefits and Code Example Comparisons
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Databases</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/news/sql-case-statement-tutorial-with-when-then-clause-example-queries/">
              SQL Case Statement Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/news/sql-aggregate-functions-with-example-data-queries-for-beginners/">
              SQL Aggregate Functions
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/news/sql-outer-join-tutorial-with-example-syntax/">
              SQL Outer Join Tutorial
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Raspberry Pi</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/news/what-is-raspberry-pi-specs-and-models-2021-guide/">
              What is Raspberry Pi? Specs & Models
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Writing;
