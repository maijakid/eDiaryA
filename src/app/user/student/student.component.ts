import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


// import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  private students:Student[];
  // private location: Location;
  // selectedStudent: Student;

  constructor(private router:Router, private studentService:StudentService, private location: Location) { }

  //poziva metod getAllStudent iz student.service klase
  ngOnInit() {
    this.studentService.getAllStudents().subscribe((students)=>{
      console.log(students);
      this.students=students;
    },(error)=>{
      console.log(error);
    })
  }

  goBack(): void {
    this.location.back();
  }

  // onSelect(student: Student): void {
  //   this.selectedStudent = student;
  // }

  // deleteStudent(student) {
  //   this.studentService.deleteById(student.id).subscribe((data)=>{
  //     this.students.splice(this.students.indexOf(student),1);
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

  // goToGrades(idStudent:number, idSubject:number) {
  //   this.router.navigate(['grade', idStudent, idSubject);
  // }
  // getGrades(subject, student) {
  //
  // }

}
