package com.wilsonliu.todolistbackend.service;

import com.wilsonliu.todolistbackend.entity.TaskEntity;
import com.wilsonliu.todolistbackend.model.Task;
import com.wilsonliu.todolistbackend.repository.TaskRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImplementation implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImplementation(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    /**
     * Creates a new task.
     *
     * @param task The task to be created.
     * @return The created task.
     */
    @Override
    public Task createTask(Task task) {
        TaskEntity taskEntity = new TaskEntity();
        BeanUtils.copyProperties(task, taskEntity); // Copies properties from task to taskEntity
        taskRepository.save(taskEntity);
        return task;
    }

    /**
     * Retrieves all tasks.
     *
     * @return A list of all tasks.
     */
    @Override
    public List<Task> getAllTasks() {
        List<TaskEntity> taskEntities = taskRepository.findAll();
        List<Task> tasks = taskEntities.stream().map(t -> new Task(t.getId(),
                        t.getTitle(),
                        t.getDescription(),
                        t.getDueDate(),
                        t.getIsComplete(),
                        t.getCategory()))
                .collect(Collectors.toList());
        return tasks;
    }

    /**
     * Deletes a task by its ID.
     *
     * @param id The ID of the task to be deleted.
     * @return True if the task was successfully deleted, false otherwise.
     */
    @Override
    public boolean deleteTask(Long id) {
        TaskEntity taskEntity = taskRepository.findById(id).get();
        taskRepository.delete(taskEntity);
        return true;
    }

    /**
     * Retrieves a task by its ID.
     *
     * @param id The ID of the task to be retrieved.
     * @return The task with the specified ID, or null if not found.
     */
    @Override
    public Task getTaskById(Long id) {
        TaskEntity taskEntity = taskRepository.findById(id).get();
        Task task = new Task();
        BeanUtils.copyProperties(taskEntity, task);
        return task;
    }

    /**
     * Updates a task with the specified ID.
     *
     * @param id   The ID of the task to be updated.
     * @param task The updated task data.
     * @return The updated task.
     */
    @Override
    public Task updateTask(Long id, Task task) {
        TaskEntity taskEntity = taskRepository.findById(id).get();
        taskEntity.setTitle(task.getTitle());
        taskEntity.setDescription(task.getDescription());
        taskEntity.setDueDate(task.getDueDate());
        taskEntity.setIsComplete(task.getIsComplete());
        taskEntity.setCategory(task.getCategory());

        taskRepository.save(taskEntity);
        return task;
    }
}