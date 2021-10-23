import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../components/studentCard';
import { getStorageData } from '../utils/storage';

const Main = () => {
  const data = getStorageData('student');
  return (
    <>
      {data ? <StudentCard student={data} /> : <h5 className='m-5'>Нет данных</h5>}
      <Link to='/create'>
        <button className='btn btn-primary' type='button'>
          Добавить
        </button>
      </Link>
    </>
  );
};

export default Main;
