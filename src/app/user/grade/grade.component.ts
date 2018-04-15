import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../service/grade.service';
import { Grade } from '../../grade';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'; //proveri da li treba
import { Location } from '@angular/common';



@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})




export class GradeComponent implements OnInit {

  private grades: Grade[];
  private studentId: number = +this.route.snapshot.paramMap.get('studentid');
  private subjectId: number = +this.route.snapshot.paramMap.get('subjectid');

  constructor(private gradeService: GradeService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const studentId: number = +this.route.snapshot.paramMap.get('studentid');
    const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
    this.gradeService.getGrades(studentId, subjectId).subscribe((grades)=>{
      console.log(grades);
      this.grades=grades;
    },(error)=>{
      console.log(error);
    })
  }

  goBack(): void {
    this.location.back();
  }

  deleteGrade(grade) {
    const studentId: number = +this.route.snapshot.paramMap.get('studentid');
    const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
    this.gradeService.deleteGrade(grade.id)
    .subscribe((grade)=>{
      this.grades.splice(this.grades.indexOf(grade),1);
      // this.router.navigate(['/subject/'+subjectId+'/student/'+studentId]);
    }, (error)=>{
      console.log(error);
    });
  }

  updateGrade(grade) {
    const studentId: number = +this.route.snapshot.paramMap.get('studentid');
    const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
    this.gradeService.setter(grade);
    this.router.navigate(['/subject/'+subjectId+'/student/'+studentId+'/grade']);
  }

  addNewGrade(){
    const studentId: number = +this.route.snapshot.paramMap.get('studentid');
    const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
    let grade = new Grade();
    this.gradeService.setter(grade);
    this.router.navigate(['/subject/'+subjectId+'/student/'+studentId+'/grade']);

  }


}
