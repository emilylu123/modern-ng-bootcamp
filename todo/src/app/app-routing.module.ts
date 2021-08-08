import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputItemComponent } from './input-item/input-item.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'input', component: InputItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
