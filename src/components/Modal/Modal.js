import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Modal.scss';

let modalRoot = document.getElementById('modal');

//for jest testing add modalroot if not available
if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
}

const Modal = (props) => {
    const { isModalOpen, children } = props;
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const target = el.current;
        modalRoot.appendChild(el.current);
        return () => {
            modalRoot.removeChild(target);
        };
    }, []);

    return createPortal(
        <CSSTransition
            in={isModalOpen}
            timeout={400}
            classNames="modal"
            unmountOnExit
        >
            <div className="modal-overlay">
                {children}
            </div>
        </CSSTransition>
        , el.current
    );
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;
