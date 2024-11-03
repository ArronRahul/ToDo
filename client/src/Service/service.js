import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api/tasks';

export const CreateTask = async (taskname) => {
    console.log(taskname);
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
