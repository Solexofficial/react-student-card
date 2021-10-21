import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h1>Карточка студента</h1>
      <Link to='/create'>
        <button type='button'>Добавить</button>
      </Link>
    </>
  );
};

export default Main;
