import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OnomatopoeiasComponent } from './onomatopoeias/onomatopoeias.component';
import { CreateOnomatopoeiasComponent } from './create-onomatopoeias/create-onomatopoeias.component';

@NgModule({
  declarations: [
    AppComponent,
    OnomatopoeiasComponent,
    CreateOnomatopoeiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
