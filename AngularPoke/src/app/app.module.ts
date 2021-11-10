import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllofthemComponent } from './allofthem/allofthem.component';
import { AboutComponent } from './about/about.component';
import { CatcherComponent } from './catcher/catcher.component';

@NgModule({
  declarations: [
    AppComponent,
    AllofthemComponent,
    AboutComponent,
    CatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
