import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../student';
// import { Routes, RouterModule } from '@angular/router';

import { Subject } from '../../subject';
import { SubjectService } from '../../service/subject.service';   //ovo ima veze sa subject id ne znam da li radi

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  private students:Student[];
  // selectedSubject: Subject;
  constructor(private studentService:StudentService) { }

  //poziva metod getAllStudent iz student.service klase
  ngOnInit() {
    this.studentService.getAllStudents().subscribe((students)=>{
      console.log(students);
      this.students=students;
    },(error)=>{
      console.log(error);
    })
  }

  deleteStudent(student) {
    this.studentService.deleteById(student.id).subscribe((data)=>{
      this.students.splice(this.students.indexOf(student),1);
    },(error)=>{
      console.log(error);
    })
  }

  // goToGrades(idStudent:number, idSubject:number) {
  //   this.router.navigate(['grade', idStudent, idSubject);
  // }
  // getGrades(subject, student) {
  //
  // }

}
