import { TodosService } from './todos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: string[] = [];
  private todoListSubs: Subscription = new Subscription();

  constructor(private todoService: TodosService) {}
  ngOnInit(): void {
    this.todos = this.todoService.todoList;
    this.todoListSubs = this.todoService.listChanged.subscribe((todos) => {
      this.todos = todos;
    });
  }

  onRemoveTodoItem(todo: any) {
    this.todoService.removeTodoItem(todo);
    console.log(todo);
  }

  ngOnDestroy() {
    this.todoListSubs.unsubscribe();
  }
}
