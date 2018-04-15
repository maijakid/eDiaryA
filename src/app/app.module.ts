import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- two ways binding jos ga nemam
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { StudentComponent } from './user/student/student.component';
import { StudentFormComponent } from './form/student-form/student-form.component';
import { StudentService } from './service/student.service';

import { SubjectComponent } from './user/subject/subject.component';
import { GradeComponent } from './user/grade/grade.component';
import { SubjectService } from './service/subject.service';
import { GradeService } from './service/grade.service';
import { UserComponent } from './user/user/user.component';
import { GradeFormComponent } from './form/grade-form/grade-form.component';

import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


const appRoutes: Routes=[
  {path:'', component:UserComponent}, //AppComponent template replace the <app-users> element with a <router-outlet> element.
  {path:'subjects', component:SubjectComponent},  //izbrisani name="usersList" i "subjectsList"
  {path:'subject/:subjectid', component: StudentComponent,
    // children: [{ path: 'student/:studentid', component: GradeComponent }]  //ne radi preko child
  },
  {path:'subject/:subjectid/student/:studentid', component:GradeComponent}, //, outlet:"gradesList"
  {path:'subject/:subjectid/student/:studentid/grade', component:GradeFormComponent},
  // {path:'grade', component:GradeComponent},
  // {path:'grade/:idStudent/:idSubject', name: 'StudentSubject', component: GradeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    SubjectComponent,
    GradeComponent,
    UserComponent,
    GradeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    BsDropdownModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule, // ide u kompletu sa #5
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  exports: [RouterModule], //dodato za 2 param
  providers: [StudentService, SubjectService, GradeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
