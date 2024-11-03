import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './Modal.css';
import { CreateTask } from '../../Service/service';

const Modal = ({ toggleModal }) => {
  const [taskData, setTaskData] = useState('');

  const saveData = async () => {
    if (!taskData) {
      alert('Task name cannot be empty.');
      return;
    }

    try {
      await CreateTask(taskData);
      setTaskData('');
      toggleModal();
      console.log('Task created');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Task Name</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Task Name"
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <div className="button-area">
          <button className="modal-button" onClick={saveData}>Save</button>
          <button className="modal-button" onClick={toggleModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
