import Header from '../components/Header';
import { useEffect, useState } from 'react';

let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['media:content'],
  },
});

const Writing = () => {
  const [articles, setArticles] = useState([]);
  const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';
  useEffect(async () => {
    const articleArr = [];
    let feed = await parser.parseURL(
      CORS_PROXY + 'https://www.freecodecamp.org/news/author/veronica/rss/'
    );

    feed.items.forEach((item) => {
      let imgUrl = item['media:content']['$'].url;
      articleArr.push(
        <article>
          <img src={imgUrl} width={300} />
          <a href={item.link}>
            <h3>{item.title}</h3>
          </a>
        </article>
      );
    });
    setArticles(articleArr);
  }, []);
  return (
    <div>
      <Header />
      <h1>Stuff I've Written</h1>
      {articles}
    </div>
  );
};

export default Writing;
