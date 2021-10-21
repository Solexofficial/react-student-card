import React from 'react';
import { useHistory } from 'react-router';

const CreateForm = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.replace('/');
  };
  return (
    <>
      <h1>Создать</h1>
      <button onClick={handleGoHome}>Back Home</button>
    </>
  );
};

export default CreateForm;
