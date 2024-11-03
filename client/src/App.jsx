import './App.css';
import Header from './components/Header/Header.jsx';
import Task from './components/Tasks/Task.jsx';
import { add } from './assets';
import Modal from './components/modal/Modal.jsx';
import { useEffect, useState } from 'react';
import { GetTasks } from './Service/service.js';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ALL');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await GetTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Apply search and reverse sorting if needed
  const filteredAndSortedTasks = tasks
    .filter((task) => task.taskname.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortOrder === 'OLDEST') return -1; // Reverse for latest
      if (sortOrder === 'LATEST') return 1;  // Keep original order for oldest
      return 0;
    });

  return (
    <main>
      {showModal && <Modal toggleModal={toggleModal} />}
      <Header onSearch={handleSearch} onSortChange={handleSortChange} />
      <div className='tasks'>
        {filteredAndSortedTasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
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
