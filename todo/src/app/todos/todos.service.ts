import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: string[] = ['Study', 'Eat', 'Sleep'];

  addNewTodoItem(item: any) {
    this.todoList.push(item);
  }
}
