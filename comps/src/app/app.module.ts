import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    ViewsModule,
    ModsModule,
    AppRoutingModule, // AppRouting is always at the end to avoid **
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
