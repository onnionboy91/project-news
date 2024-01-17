const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Main
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Users
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
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Logout
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Sign-Up
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Sign-In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;