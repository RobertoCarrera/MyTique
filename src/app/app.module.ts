import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { PillComponent } from './components/pill/pill.component';
import { MovementCardComponent } from './components/movement-card/movement-card.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    OutcomesComponent,
    IncomesComponent,
    ProfileComponent,
    HeaderComponent,
    PillComponent,
    MovementCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
