package com.example.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {
    @Autowired
    private TodoRepository repo;

    @GetMapping
    public List<Todo> getTodos() {
        return repo.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return repo.save(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo t) {
        Todo todo = repo.findById(id).orElseThrow();
        todo.setTitle(t.getTitle());
        todo.setCompleted(t.isCompleted());
        return repo.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        repo.deleteById(id);
    }
}