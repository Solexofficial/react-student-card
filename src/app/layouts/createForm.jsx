import React from 'react';
import { useHistory } from 'react-router';
import { getStorageData, setStorageData } from '../utils/storage';

const CreateForm = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.replace('/');
  };

  const handleSetStorage = () => {
    setStorageData('student', {
      firstName: 'Mark',
      secondName: 'Pokrovsky',
      birthYear: 1995,
      portfolioUrl: 'https:asd.ru',
    });
  };
  return (
    <>
      <h1>{getStorageData('student') ? 'Редактировать' : 'Создать'}</h1>
      <div style={{ display: 'flex' }}>
        <button className='btn btn-primary mx-2' onClick={handleGoHome}>
          Назад
        </button>
        <button className='btn btn-primary' onClick={handleSetStorage}>
          Создать
        </button>
      </div>
    </>
  );
};

export default CreateForm;
