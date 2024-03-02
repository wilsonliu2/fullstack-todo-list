package com.wilsonliu.todolistbackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "tasks")
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // Unique identifier for the task

    private String title; // Title of the task
    private String description; // Description of the task
    private String dueDate; // Due date of the task
    private String isComplete;
    private String category;
}
