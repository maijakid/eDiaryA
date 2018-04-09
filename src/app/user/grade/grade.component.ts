import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../service/grade.service';
import { Grade } from '../../grade';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  private grades: Grade[];

  constructor(private gradeService: GradeService) { }

  ngOnInit() {
    // this.gradeService.getGrades().subscribe((grades)=>{
    //   console.log(grades);
    //   this.grades=grades;
    // },(error)=>{
    //   console.log(error);
    // })
  }



}
