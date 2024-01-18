const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <div className='rigth-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  Main
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  News
                </a>
              </li>
              <li className='nav-item'>
                <p className='nav-link'></p>
              </li>
            </div>
            <div className='left-nav'>
              {user ? (
                <>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      {user.name}
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/api/sing/logout'>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <a className='nav-link' href='/sing/up'>
                      Sign-Up
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/sing/in'>
                      Sign-In
                    </a>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
