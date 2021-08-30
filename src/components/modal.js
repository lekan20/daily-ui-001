import React from 'react';
import Input from './input';
import styled from 'styled-components';

const StyledModal = styled.div`
  background: #3E363F;
  border-radius: 2px;
  padding: 20px;
  width: 200px;
`;

const StyledButton = styled.button`
  align-items: center;
  background: #DD403A;
  border: 0;
  border-radius: 3px;
  color: white;
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  font-weight: 500;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  padding: 10px 9px 10px 11px;
  text-transform: uppercase;
  width: 100%;
`;


  const Modal = props => {

    return (
      <StyledModal>
        <div className="modal-content" >
          <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <form
                onSubmit={props.onSubmit} >
                <Input id={'name'} type={'text'} placeholder={'Lekan'}/>
                <Input id={'email'} type={'text'} placeholder={'Email'} />
                <Input id={'password'} type={'password'} placeholder={'Password'} />
                <StyledButton className="button">
                  Log in
                </StyledButton>
            </form>
          </div>
        </div>
      </StyledModal>
    );
  }
 

export default Modal;