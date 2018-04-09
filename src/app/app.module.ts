import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- two ways binding jos ga nemam

import { AppComponent } from './app.component';
import { StudentComponent } from './user/student/student.component';
import { StudentFormComponent } from './form/student-form/student-form.component';
import { StudentService } from './service/student.service';

import { SubjectComponent } from './user/subject/subject.component';
import { GradeComponent } from './user/grade/grade.component';
import { SubjectService } from './service/subject.service';
import { GradeService } from './service/grade.service';
import { UserComponent } from './user/user/user.component';


const appRoutes: Routes=[
  {path:'', component:UserComponent}, //AppComponent template replace the <app-users> element with a <router-outlet> element.
  {path:'subjects', component:SubjectComponent},  //izbrisani name="usersList" i "subjectsList"
  {path:'subject/:id', component: StudentComponent,
    children: [{ path: 'student/:id', component: GradeComponent }]
  },
  {path:'subject/:id', component:SubjectComponent, outlet: "subjectDetail"},
  {path:'grade/:idStudent/:idSubject', component: GradeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    SubjectComponent,
    GradeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule // ide u kompletu sa #5
  ],
  exports: [RouterModule], //dodato za 2 param
  providers: [StudentService, SubjectService],
  bootstrap: [AppComponent]
})

export class AppModule { }
