import React from 'react';

const Modal = ({ visible, onShow }) => {
  console.log(visible);
  return (
    visible && (
      <div
        className='modal-overlay'
        style={{
          width: '100vw',
          minHeight: '100vh',
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
        }}
      >
        <div className={`modal ${visible ? 'show' : ''}`} style={{ display: 'block' }} tabIndex='-1' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Карточка студента</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={onShow}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <p>Данные обновлены!</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={onShow}>
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
