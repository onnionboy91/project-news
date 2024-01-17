const React = require('react');
const Layout = require('./Layout');

function HomePage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1 className='title'>Home page</h1>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
