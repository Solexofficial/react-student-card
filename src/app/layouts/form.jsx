import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getStorageData, setStorageData } from '../utils/storage';
import TextField from '../components/textField';
import validator from '../utils/validator';

const Form = () => {
  const history = useHistory();
  const initialState = { firstName: '', secondName: '', birthYear: '', portfolioUrl: '' };
  const [data, setData] = useState(getStorageData('student') || initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const validatorConfig = {
    firstName: {
      isRequired: { message: 'Имя обязательно для заполнения' },
    },
    secondName: {
      isRequired: { message: 'Фамилия обязательно для заполнения' },
    },
    birthYear: {
      isRequired: { message: 'Год рождения обязательно для заполнения' },
      isValidYear: { message: 'Поле "Год Рождения" не корректно' },
    },
    portfolioUrl: {
      isRequired: { message: 'Портфолио обязательно для заполнения' },
      isUrl: { message: 'Поле портфолио должно быть ссылкой' },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleGoHome = () => {
    history.replace('/');
  };

  const handleSetStorage = data => {
    setStorageData('student', data);
  };

  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSetStorage(data);
  };

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%', minHeight: '100%' }}
      >
        <h1>{getStorageData('student') ? 'Редактировать' : 'Создать'}</h1>
        <form style={{ minHeight: 500 }}>
          <TextField
            label='Имя'
            value={data.firstName}
            placeholder='Введите ваше имя'
            name='firstName'
            onChange={handleChange}
            error={errors.firstName}
          />
          <TextField
            label='Фамилия'
            value={data.secondName}
            placeholder='Введите вашу фамилию'
            name='secondName'
            onChange={handleChange}
            error={errors.secondName}
          />
          <TextField
            label='Год Рождения'
            type='number'
            value={data.birthYear}
            min={1900}
            max={new Date().getFullYear()}
            name='birthYear'
            onChange={handleChange}
            error={errors.birthYear}
          />
          <TextField
            label='Портфолио'
            value={data.portfolioUrl}
            placeholder='https://portfolio.ru'
            name='portfolioUrl'
            onChange={handleChange}
            error={errors.portfolioUrl}
          />
          <div className='btn-group'>
            <button className='btn btn-primary mx-2' onClick={handleGoHome}>
              Назад
            </button>
            <button className='btn btn-primary' type='submit' onClick={handleSubmit} disabled={!isValid}>
              {getStorageData('student') ? 'Обновить' : 'Создать'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
