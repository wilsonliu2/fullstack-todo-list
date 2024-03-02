package com.wilsonliu.todolistbackend.controller;

import com.wilsonliu.todolistbackend.model.Task;
import com.wilsonliu.todolistbackend.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    /**
     * Endpoint for creating a new task.
     *
     * @param task The task data to be created.
     * @return The created task.
     */
    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    /**
     * Endpoint for retrieving all tasks.
     *
     * @return A list of all tasks.
     */
    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    /**
     * Endpoint for deleting a task by its ID.
     *
     * @param id The ID of the task to be deleted.
     * @return ResponseEntity indicating if the task was successfully deleted.
     */
    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id) {
        boolean deleted = taskService.deleteTask(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    /**
     * Endpoint for retrieving a task by its ID.
     *
     * @param id The ID of the task to be retrieved.
     * @return ResponseEntity containing the task if found.
     */
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskService.getTaskById(id);
        return ResponseEntity.ok(task);
    }

    /**
     * Endpoint for updating a task with the specified ID.
     *
     * @param id   The ID of the task to be updated.
     * @param task The updated task data.
     * @return ResponseEntity containing the updated task.
     */
    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task task) {
        task = taskService.updateTask(id, task);
        return ResponseEntity.ok(task);
    }
}