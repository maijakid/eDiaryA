import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './user/student/student.component';
import { StudentFormComponent } from './form/student-form/student-form.component';
import { StudentService } from './service/student.service';

import { SubjectComponent } from './user/subject/subject.component';
import { GradeComponent } from './user/grade/grade.component';
import { SubjectService } from './service/subject.service';
import { GradeService } from './service/grade.service';


const appRoutes: Routes=[
  {path:'', component:StudentComponent, outlet:'studentsList'},
  {path:'sf', component:StudentFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    SubjectComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
