const React = require('react');
const NewsItem = require('./NewsItem');

function NewsCardsList({ news }) {
  return (
    <div className="news-cards">
      {news.map((newsOne) => (
        <NewsItem key={newsOne.id} newsOne={newsOne} />
      ))}
    </div>
  );
}

module.exports = NewsCardsList;
