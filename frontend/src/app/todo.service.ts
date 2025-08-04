import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private api = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}