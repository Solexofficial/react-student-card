import React from 'react';
import PropTypes from 'prop-types';
import getAge from '../utils/getAge';

const StudentCard = ({ student }) => {
  const { firstName, secondName, birthYear, portfolioUrl } = student;
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
        <strong>Год Рождения: </strong> {getAge(birthYear)}
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
