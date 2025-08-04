import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTitle = '';

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  addTodo() {
    const todo: Todo = { title: this.newTitle, completed: false };
    this.service.addTodo(todo).subscribe(() => {
      this.newTitle = '';
      this.loadTodos();
    });
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.service.updateTodo(todo).subscribe();
  }

  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe(() => this.loadTodos());
  }
}