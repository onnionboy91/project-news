const React = require('react');
const Layout = require('./Layout');

function SingInPage({ title }) {
  return (
    <Layout>
      <form action="" method="post" className="sing-in container  ">
        <h1>{title}</h1>
        <div className="container">
          <label>Логин </label>
          <input name="name" type="text" />
        </div>
        <div className="container">
          <label>Пароль</label>
          <input name="password" type="text" />
        </div>
        <div className="container">
          <button className="btn btn-primary" type="submit">
            Вход
          </button>
        </div>
      </form>
    </Layout>
  );
}
module.exports = SingInPage;
