import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GameComponent } from './game/game.component';
import { StarsComponent } from './game/stars/stars.component';
import { ButtonComponent } from './game/button/button.component';
import { AnswerComponent } from './game/answer/answer.component';
import { NumbersComponent } from './game/numbers/numbers.component';
import { MessageComponent } from './game/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GameComponent,
    StarsComponent,
    ButtonComponent,
    AnswerComponent,
    NumbersComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
