import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './layouts/form';
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
            <Route path='/' exact component={Main} />
            <Route path='/student' component={Form} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
