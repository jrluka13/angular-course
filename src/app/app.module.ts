import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostformComponent } from './postform/postform.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import {LogNameService} from "./log-name.service";

@NgModule({
  declarations: [
    AppComponent,
    PostformComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
