import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOneComponent,
    TableTwoComponent
  ],
  imports: [
    FormsModule,
    
    BrowserModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
