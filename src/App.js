import React, { useState } from 'react';
import Modal from './components/modal';
import Input from './components/input';
import './Modal.css';


export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
        <Modal title="Sign Up Form" onClose ={() => setShow(false)} show={show} >
          <form>
            <label>
              Name:
              <input />
            </label>
            <label>
              Email:
              <input />
            </label>
            <label>
              Password:
              <input />
            </label>
          </form>
        </Modal>
    </div>
  );
};
