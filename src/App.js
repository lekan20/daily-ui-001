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



export default function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <AppWrapper>
        {show === true && <Modal title="Sign Up Form" onSubmit ={(e) => handleClick()} />}
    </AppWrapper>
  );
};
