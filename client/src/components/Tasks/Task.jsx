import { useState } from 'react';
import './Task.css';
import { updateTaskStatus } from '../../Service/service';

const Task = ({ task }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleClick = async () => {
        const updatedTask = { ...task, completed: !isCompleted };
        
        // Optimistically update the state
        setIsCompleted(!isCompleted);

        try {
            await updateTaskStatus(task._id, updatedTask);
        } catch (error) {
            console.error('Error updating task status:', error);
            setIsCompleted(isCompleted);
        }
    };

    return (
        <div className='Tasks'>
            <div className='main1'>
                <input 
                    type='checkbox' 
                    className='checkbox' 
                    checked={isCompleted} 
                    onChange={handleClick} 
                />
                <p className={`task ${isCompleted ? 'completed' : ''}`}>{task.taskname}</p>
            </div>
            <hr />
        </div>
    );
}

export default Task;
