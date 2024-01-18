const React = require('react');

function NewsItem({newsOne}) {
  return (
    <div className='card'>
      <img src={newsOne.img} className='card-img-top' alt={`${newsOne.id}`} />
      <div className='card-body'>
        <h5 className='card-title'>{newsOne.tittle}</h5>
        <a href='/news' className='btn btn-primary'>
          Подробнее 
        </a>
      </div>
    </div>
  );
}

module.exports = NewsItem;
