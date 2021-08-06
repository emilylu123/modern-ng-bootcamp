import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'To Do List';
  todoList: string[] = ['Study', 'Eat', 'Sleep'];

  addNewTodoItem(item: any) {
    this.todoList.push(item);
  }
}
