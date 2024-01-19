const React = require('react');

function AddNewsForm() {
  return (
    <div className='container form-add-admin'>
      <form id='add-news'>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Заголовок
          </label>
          <input
            name='tittle'
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Картинка
          </label>
          <input
            name='img'
            type='file'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Описание
          </label>
          <input
            name='description'
            type='text'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <button type='submit' className='btn btn-primary '>
          Добавить
        </button>
      </form>
    </div>
  );
}

module.exports = AddNewsForm;
