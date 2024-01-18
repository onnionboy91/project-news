const React = require('react');

function NewsItem({newsOne}) {
  return (
    <div className='card' style={{ width: '18rem', margin: '20px' }}>
      <img src={newsOne.img} className='card-img-top' alt={`${newsOne.id}`} />
      <div className='card-body'>
        <h5 className='card-title'>{newsOne.tittle}</h5>
        <a href={`/${newsOne.id}`} className='btn btn-primary'>
          Подробнее 
        </a>
      </div>
    </div>
  );
}

module.exports = NewsItem;
