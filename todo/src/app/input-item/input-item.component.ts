import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
})
export class InputItemComponent implements OnInit {
  @Output() todoItemCreated = new EventEmitter<string>();
  enteredNewItem: string = '';
  constructor() {}

  ngOnInit(): void {}

  onAddNewTodo() {
    this.todoItemCreated.emit(this.enteredNewItem);
    this.enteredNewItem = '';
  }
}
