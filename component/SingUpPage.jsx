const React = require('react');
const Layout = require('./Layout');

function SingUpPage({ title }) {
  return (
    <Layout>
      {/* <form action="" method="post" className="sing-up container  ">
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
          <label>Повторите пароль</label>
          <input name="rpassword" type="text" />
        </div>
        <div className="container">
          <button className="btn btn-primary" type="submit">
            Вход
          </button>
        </div>
      </form> */}

      <div className="container-flex-up">
        <h1>{title}</h1>
        <form className="sing-up container-sing-up" method="post">
          <div className="container mb-3">
            <label className="form-label">Логин</label>
            <input name="name" type="text" className="form-control" />
          </div>
          <div className="container mb-3">
            <label className="form-label">Пароль</label>
            <input name="password" type="text" className="form-control" />
          </div>
          <div className="container mb-3">
            <label className="form-label">Повторите пароль</label>
            <input name="rpassword" type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-up  ">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = SingUpPage;
