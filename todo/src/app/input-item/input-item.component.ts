import { TodosService } from './../todos/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
})
export class InputItemComponent implements OnInit {
  // @Output() todoItemCreated = new EventEmitter<string>();
  enteredNewItem: string = '';
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {}

  onAddNewTodo() {
    // this.todoItemCreated.emit(this.enteredNewItem);
    this.todoService.addNewTodoItem(this.enteredNewItem);
    this.enteredNewItem = '';
  }
}
