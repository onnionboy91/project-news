const React = require('react');

function NewsItem() {
  return (
    <div className='card' style={{ width: '300px', height: '300px' }}>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <a href='/news' className='btn btn-primary'>
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = NewsItem;
