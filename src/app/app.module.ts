import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NameInputComponent } from './employee-list/name-input/name-input.component';
import { ListComponent } from './employee-list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NameInputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
