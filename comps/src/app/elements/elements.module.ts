import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  // no need to exports if using routes
  // exports: [ElementsHomeComponent], // exports components
})
export class ElementsModule {}
