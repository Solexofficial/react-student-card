import React from 'react';
import PropTypes from 'prop-types';
import getAge from '../utils/getAge';

const StudentCard = ({ student }) => {
  const { firstName, secondName, birthYear, portfolioUrl } = student;
  console.log(firstName, secondName, birthYear, portfolioUrl);
  return (
    <div style={{ marginBottom: 10 }}>
      <h1>Карточка студента</h1>
      <div>
        <strong>Имя: </strong>
        {firstName}
      </div>
      <div>
        <strong>Фамилия: </strong> {secondName}
      </div>
      <div>
        <strong>Год Рождения: </strong> {getAge(1995)}
      </div>
      <div>
        <strong>Портфолио: </strong> {portfolioUrl}
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.object,
};

export default StudentCard;
