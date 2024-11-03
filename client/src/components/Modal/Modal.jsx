import { useState } from 'react';
import { CreateTask } from '../../Service/service'; // Check consistency here
import './Modal.css';

const Modal = ({ toggleModal }) => {
  const [taskData, setTaskData] = useState('');

  const saveData = async () => {
    if (!taskData) {
      alert('Task name cannot be empty.');
      return;
    }

    try {
      await CreateTask(taskData); // Call the API function
      setTaskData(''); // Clear the input field
      toggleModal(); // Close modal
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

export default Modal;
