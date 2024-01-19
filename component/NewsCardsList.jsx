const React = require('react');
const NewsItem = require('./NewsItem');

function NewsCardsList({ news, user }) {
  return (
    <div className="form-txt">
      <div className="news-cards container-News">
        {news.map((newsOne) => (
          <NewsItem key={newsOne.id} newsOne={newsOne} user={user} />
        ))}
      </div>
    </div>
  );
}

module.exports = NewsCardsList;
