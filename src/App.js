import React, { useState, useEffect } from 'react';
import Modal from './components/modal';
import styled from 'styled-components';

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  background-image: url(https://unsplash.it/1400/795);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #3E363F;
  font-family: "Lato", sans-serif;
  height: 100vh;
  overflow: hidden;
`;



export default function App() {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Wrapper>
      <AppWrapper>
          {show === true && <Modal title="Sign Up Form" onSubmit ={(e) => handleSubmit()} />}
      </AppWrapper>
    </Wrapper>
  );
};
