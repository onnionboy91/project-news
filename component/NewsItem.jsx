const React = require('react');

function NewsItem({ newsOne }) {
  return (
    <div className="card">
      <img src={newsOne.img} className="card-img-top" alt={`${newsOne.id}`} />
      <div className="card-body">
        <h5 className="card-title">{newsOne.tittle}</h5>
        <a href={`/${newsOne.id}`} className="btn btn-primary">

          Подробнее
        </a>
        {user && user.isAdmin === true && (
          <>
            <button
              data-id={newsOne.id}
              className='btn btn-danger delete'
              type='button'
            >
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = NewsItem;
