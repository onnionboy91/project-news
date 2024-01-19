const React = require('react');

function NewsItem({ newsOne, user }) {
  return (
    <div className="card">
      <img
        src={newsOne.img}
        className="card-img-top foto-card"
        alt={`${newsOne.id}`}
      />
      <div className="card-body container-card-text">
        <h5 className="card-title">{newsOne.tittle}</h5>
        <a href={`/${newsOne.id}`} className="btn btn-primary btn-home">
          Подробнее
        </a>
        {user && user.isAdmin === true && (
          <>
            <button
              data-id={newsOne.id}
              className="btn btn-danger delete"
              type="button"
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
