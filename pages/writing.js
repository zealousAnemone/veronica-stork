import Header from '../components/Header';
let Parser = require('rss-parser');
let parser = new Parser();
const getFeed = async () => {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  let feed = await parser.parseURL(
    CORS_PROXY + 'https://www.freecodecamp.org/news/author/veronica/rss/'
  );
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ':' + item.link);
  });
};
const Writing = () => {
  return (
    <div>
      <Header />
      <h1>Stuff I've Written</h1>
      <button onClick={getFeed}>get feed</button>
    </div>
  );
};

export default Writing;
