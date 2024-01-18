const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link
          href='/styles/bootstrap.css'
          rel='stylesheet'
          crossOrigin='anonymous'
        />

        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/sing.js" />
        <script defer src="/scripts/search.js" />
        <script defer src="/scripts/addComment.js" />

      </head>
      <NavBar user={user} />
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
