import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid rgba(255, 252, 232, 0.1);
  padding-bottom: 3px;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  outline: none;
  border: 0;
  color: #FFFCE8;
  background: transparent;
  font-family: "Lato", sans-serif;
  flex: 1 0 auto;
  font-size: 14px;
  font-weight: 300;
`;

const Input = props => {

  return (
  <InputWrapper>
    <StyledInput 
      id={props.id}
      autoComplete={false}
      required
      type={props.type}
      placeholder={props.placeholder}
    />
  </InputWrapper>
  );
};

export default Input