// App.jsx
import './App.css';
import Header from './components/Header/Header.jsx';
import Task from './components/Tasks/Task.jsx';
import { add } from './assets'; // Use named import with curly braces
import Modal from './components/modal/Modal.jsx';
import { useEffect, useState } from 'react';
import { GetTasks } from './Service/service.js';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [tasks,setTasks] = useState([]);

  useEffect(() =>{
    const fetchTasks = async () => {
      try{
        const fetchedTasks = await GetTasks();
        setTasks(fetchedTasks);
      }catch(error){
        console.error(error);
      }
    };
    fetchTasks();
  },[showModal])


  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <main>
      {showModal && <Modal toggleModal={toggleModal} />}
      <Header />
      <div className='tasks'>
        {tasks.map((task) => (
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
