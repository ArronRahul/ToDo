// App.jsx
import './App.css';
import Header from './components/Header/Header.jsx';
import Task from './components/Tasks/Task.jsx';
import { add } from './assets'; // Use named import with curly braces

const App = () => {
  return (
    <main>
      <Header />
      <div className='tasks'>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      </div>

      <div className='footer'>
        <img src={add} alt="Add Icon" />
      </div>
    </main>
  );
};

export default App;
