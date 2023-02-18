import React from 'react'
import styled from 'styled-components/macro'

const ModalWrapper = styled.div`
  .modalBackground {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
  }
  .modalContainer {
    position: relative;
    width: 75rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 25px;
    z-index: 22;
    margin: 0 5%;
  }
  .btn-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }

`

function Modal({ children }) {
  return (
    <ModalWrapper>
      <div className="modalBackground">
        <div className="modalContainer">
        {children}
        </div>
      </div>
    </ModalWrapper>
  )
}
export default Modal
