import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:AddcarsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
