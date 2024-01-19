const React = require('react');

function NavBar({ user }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid navbar-container">
        <div className="rigth-nav">
          <a className="nav-link active" aria-current="page" href="/">
            Main
          </a>
          <a className="nav-link" href="/">
            News
          </a>
        </div>
        <div className="left-nav">
          {user ? (
            <>
              <a className="nav-link" href="#">
                {user.name}
              </a>
              <a className="nav-link" href="/api/sing/logout">
                Logout
              </a>
            </>
          ) : (
            <>
              <a className="nav-link" href="/sing/up">
                Sign-Up
              </a>
              <a className="nav-link" href="/sing/in">
                Sign-In
              </a>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
