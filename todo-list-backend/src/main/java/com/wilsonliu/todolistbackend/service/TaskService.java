package com.wilsonliu.todolistbackend.service;

import com.wilsonliu.todolistbackend.model.Task;

import java.util.List;

public interface TaskService {
    /**
     * Creates a new task.
     *
     * @param task The task to be created.
     * @return The created task.
     */
    Task createTask(Task task);

    /**
     * Retrieves all tasks.
     *
     * @return A list of all tasks.
     */
    List<Task> getAllTasks();

    /**
     * Deletes a task by its ID.
     *
     * @param id The ID of the task to be deleted.
     * @return True if the task was successfully deleted, false otherwise.
     */
    boolean deleteTask(Long id);

    /**
     * Retrieves a task by its ID.
     *
     * @param id The ID of the task to be retrieved.
     * @return The task with the specified ID, or null if not found.
     */
    Task getTaskById(Long id);

    /**
     * Updates a task with the specified ID.
     *
     * @param id   The ID of the task to be updated.
     * @param task The updated task data.
     * @return The updated task.
     */
    Task updateTask(Long id, Task task);
}