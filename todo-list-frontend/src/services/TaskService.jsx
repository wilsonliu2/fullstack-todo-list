import axios from "axios";

const TASK_API_BASE_URL = "http://localhost:8080/api/v1/tasks";

class TaskService {
  saveTask(task) {
    return axios.post(TASK_API_BASE_URL, task);
  }

  getTasks() {
    return axios.get(TASK_API_BASE_URL);
  }

  deleteTask(id) {
    return axios.delete(TASK_API_BASE_URL + "/" + id);
  }

  getTaskById(id) {
    return axios.get(TASK_API_BASE_URL + "/" + id);
  }

  updateTask(task, id) {
    return axios.put(TASK_API_BASE_URL + "/" + id, task);
  }
}

export default new TaskService();
