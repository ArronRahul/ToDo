import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api/tasks';

export const CreateTask = async (taskname) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, {
            taskname: taskname,
        });
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const GetTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const updateTaskStatus = async (taskId, updatedTask) => {
    console.log(taskId, updatedTask);
    try {
        const response = await axios.put(`${API_BASE_URL}/${taskId}`, updatedTask);
        return response.data; 
    } catch (error) {
        console.error('Error updating task:', error);
        throw error; 
    }
}