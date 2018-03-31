import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  private students:Student[];
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

}
