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

  useEffect(async () => {
    const articleArr = [];
    let feed = await parser.parseURL(
      'https://www.freecodecamp.org/news/author/veronica/rss/'
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
