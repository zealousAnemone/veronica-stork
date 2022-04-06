import Head from 'next/head';
import data from '../data.json';
import { useState } from 'react';

const Writing = () => {
  const [filterTerm, setFilterTerm] = useState('');

  let articles;
  let tags;

  articles = data.articles.map((article) => {
    if (!filterTerm || article.tags.indexOf(filterTerm) !== -1) {
      tags = article.tags.map((tag) => (
        <span className="tag" onClick={() => setFilterTerm(tag)}>
          {tag}
        </span>
      ));
      return (
        <div className="card">
          <a href={article.url}>{article.title}</a>
          <br />
          <div className="tags">{tags}</div>
        </div>
      );
    }
  });

  return (
    <div>
      <Head>
        <title>Writing portfolo</title>
      </Head>
      <h1>Technical Writing</h1>
      {filterTerm && (
        <button onClick={() => setFilterTerm('')}>Show all</button>
      )}
      {articles}
    </div>
  );
};

export default Writing;
