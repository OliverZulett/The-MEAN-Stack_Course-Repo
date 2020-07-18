import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PopularsComponent } from './pages/populars/populars.component';
import { AboutComponent } from './pages/about/about.component';
import { LatestComponent } from './pages/latest/latest.component';
import { GameComponent } from './pages/game/game.component';
import { CardGameComponent } from './components/card-game/card-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularsComponent,
    AboutComponent,
    LatestComponent,
    GameComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
