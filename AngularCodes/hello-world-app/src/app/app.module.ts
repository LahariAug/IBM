import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestComponent } from './fest/fest.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
//import { ComponentnameComponent } from './componentname/componentname.component';
//import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FestComponent,
    //EmployeeListComponent,
    //EmployeeServiceComponent,
 //   ComponentnameComponent,
  //  TestcomponentComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
