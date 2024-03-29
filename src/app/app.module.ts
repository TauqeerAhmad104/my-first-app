import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServicesComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
