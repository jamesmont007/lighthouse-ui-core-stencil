import React, { useRef } from 'react';
import closeIcon from '../../node_modules/lighthouse-ui-core-stencil/dist/collection/assets/icons/close-icon.svg';

const Modal = () => {
  const ref = useRef(null);

  const openModal = () => {
    ref.current.openModal();
  };

  const closeModal = () => {
    ref.current.closeModal();
  };

  return (
    <div>
      <h2>Modals</h2>

      <button type='button' class='btn btn-primary' onClick={openModal}>
        Abrir Modal
      </button>

      <st-core-modal ref={ref}>
        <div class='modal-header'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-6'>
                <span class='modal-title'>Titulo Modal</span>
              </div>
              <div class='col-6 text-right'>
                <button type='button' class='close-button' aria-label='Close' onClick={closeModal}>
                  <img src={closeIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class='modal-body'>Cuerpo de la modal</div>
        <div class='modal-footer'>
          <button type='button' class='btn btn-primary' onClick={closeModal}>
            Aceptar
          </button>
        </div>
      </st-core-modal>
    </div>
  );
};

export default Modal;
