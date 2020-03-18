import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' 
 
import { AppComponent } from './app.component';
import  {InterploationComponent} from './interpolation.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student.component';
import { ClassComponent } from './class/class.component';
import { EmployeePipe } from './employee/employee.pipe';
import { TryComponent } from './employee/try.component';
import { Try2Component } from './try2/try2.component';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationNewComponent } from './animation-new/animation-new.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component'

const appRoutes : Routes = [
  {path:'home', component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InterploationComponent,
    EmployeeComponent,
    StudentComponent,
    ClassComponent,
    EmployeePipe,
    TryComponent,
    Try2Component,
    EmployeeCountComponent,
    HomeComponent,
    PageNotFoundComponent,
    AnimationComponent,
    AnimationNewComponent,
    ModelDrivenComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
