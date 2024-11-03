// App.jsx
import './App.css';
import Header from './components/Header/Header.jsx';
import Task from './components/Tasks/Task.jsx';
import { add } from './assets'; // Use named import with curly braces
import Modal from './components/modal/Modal.jsx';
import { useState } from 'react';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <main>
      {showModal && <Modal toggleModal={toggleModal} />}
      <Header />
      <div className='tasks'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

      <div className='footer'>
        <img
          src={add}
          alt="Add Icon"
          role="button"
          tabIndex="0"
          onClick={toggleModal}
          onKeyDown={(e) => e.key === 'Enter' && toggleModal()}
        />
      </div>
    </main>
  );
};

export default App;
