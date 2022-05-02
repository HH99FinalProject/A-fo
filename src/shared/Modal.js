import React from 'react';
import ReactDOM from 'react-dom';

import { Div, GlobalStyle } from '../components/ui';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <React.Fragment>
      <GlobalStyle />
      <Div overlayModal _onClick={onClose} />
      <Div modal>{children}</Div>
    </React.Fragment>,
    document.getElementById('portal')
  );
};

export default Modal;
