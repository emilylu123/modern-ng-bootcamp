import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  listChanged = new Subject<string[]>();
  todoList: string[] = ['Study', 'Eat', 'Sleep'];

  addNewTodoItem(item: any) {
    this.todoList.push(item);
    this.listChanged.next(this.todoList);
  }

  removeTodoItem(content: string) {
    this.todoList = this.todoList.filter((todo) => {
      return todo !== content;
    });
    console.log(this.todoList);
    this.listChanged.next(this.todoList);
  }
}
