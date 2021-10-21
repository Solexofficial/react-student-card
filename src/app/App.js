import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateForm from './layouts/createForm';
import Main from './layouts/main';

function App() {
  return (
    <>
      <div className='container'>
        <div
          style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Switch>
            <Route path='/' component={Main} />
            <Route path='/create' component={CreateForm} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
