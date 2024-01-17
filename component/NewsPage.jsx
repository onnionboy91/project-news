const React = require('react');

function NewsPage() {
  return (
    <div className='card' style={{ display: 'flex' }}>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p class='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

module.exports = NewsPage;
