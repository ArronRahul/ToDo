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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply search and sorting
  const filteredAndSortedTasks = tasks
    .filter((task) => task.taskname.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortOrder === 'OLDEST') return new Date(a.date) - new Date(b.date);
      if (sortOrder === 'LATEST') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <main className={isDarkTheme ? 'dark' : 'light'}>
      {showModal && <Modal toggleModal={toggleModal} />}
      <Header onSearch={handleSearch} onSortChange={handleSortChange} toggleTheme={toggleTheme} />
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
