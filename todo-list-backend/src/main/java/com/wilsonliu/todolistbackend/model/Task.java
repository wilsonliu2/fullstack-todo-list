package com.wilsonliu.todolistbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    private long id; // Unique identifier for the task
    private String title; // Title of the task
    private String description; // Description of the task
    private String dueDate; // Due date of the task
    private String isComplete;
    private String category;
}
