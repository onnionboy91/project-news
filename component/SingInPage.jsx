const React = require('react');
const Layout = require('./Layout');

function SingInPage({ title }) {
  return (
    <Layout>
      {/* <form action="" method="post" className="sing-in container-sing-in">
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
      </form> */}
      <div className="container-flex-up">
        <h1>{title}</h1>
        <form className="sing-in container-sing-in" method="post">
          <div className="container mb-3">
            <label className="form-label">Логин</label>
            <input name="name" type="text" className="form-control" />
          </div>
          <div className="container mb-3">
            <label className="form-label">Пароль</label>
            <input name="password" type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-in  ">
            Вход
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = SingInPage;
