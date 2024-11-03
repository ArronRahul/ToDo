const API_BASE_URL = '/api';

export const CreateTask = async (taskname) => {
    console.log(taskname)
    try{
        const response= await fetch(`${API_BASE_URL}/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({taskname})
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    }
    catch(error){
        console.error(error);
        throw(error);
    }
}