const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid navbar-container">
        <div className="rigth-nav">
          <a className="nav-link active" aria-current="page" href="/">
            <p className="color-a">Главная страничка</p>
          </a>
          <a className="nav-link" href="/">
            <p className="color-a"> Новости</p>
          </a>
        </div>
        <div className="left-nav">
          {user ? (
            <>
              <a className="nav-link" href="#">
                <p className="color-a"> {user.name}</p>
              </a>
              <a className="nav-link" href="/api/sing/logout">
                <p className="color-a">Выйти</p>
              </a>
            </>
          ) : (
            <>
              <a className="nav-link" href="/sing/in">
                <p className="color-a">Вход</p>
              </a>
              <a className="nav-link" href="/sing/up">
                <p className="color-a">Зарегистрироваться</p>
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
