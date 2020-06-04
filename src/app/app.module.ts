import { NgModule } from '@angular/core';
import { ParticlesModule } from 'ngx-particle';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
