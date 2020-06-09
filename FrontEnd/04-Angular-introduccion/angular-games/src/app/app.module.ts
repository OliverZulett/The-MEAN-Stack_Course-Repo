import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<<< HEAD:FrontEnd/04-Angular-introduccion/angular-games/src/app/app.module.ts
import { GameComponent } from './game/game.component';
========
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
>>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76:FrontEnd/04-Angular-introduccion/hola-mundo/src/app/app.module.ts
=======
import { ArticleComponent } from './article/article.component';
>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<<< HEAD:FrontEnd/04-Angular-introduccion/angular-games/src/app/app.module.ts
    GameComponent
========
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
>>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76:FrontEnd/04-Angular-introduccion/hola-mundo/src/app/app.module.ts
=======
    ArticleComponent
>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
