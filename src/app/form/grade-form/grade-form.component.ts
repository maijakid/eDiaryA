import { Component, OnInit } from '@angular/core';

import { Grade, enumGrade} from '../../grade';
import { GradeService } from '../../service/grade.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //hero
import { FormControl } from '@angular/forms';//hero



@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})


export class GradeFormComponent implements OnInit {

  private grade:Grade;
  grnum = ['neocenjen', 'nedovoljan', 'dovoljan', 'dobar', 'vrlodobar', 'odlican']

  // gradeControl = new FormControl();
  // gradeGroup = new FormGroup ({
  //   gradeControl: new FormControl(),
  //   commentControl: new FormControl(),
  //   finalGradeControl: new FormControl()
  // });

  gradeGroup: FormGroup;


  constructor(
      private gradeService: GradeService,
      // private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute, //proveri da li treba
      private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
     this.gradeGroup = this.fb.group ({
       grade: '',
       comment: '',
       finalGrade: ''
     })
   }

   // this.gradeGroup.setValue({
   //   grnum: this.grade.grnum,
   //   comment: this.grade.comment,
   //   finalGrade: this.grade.finalGrade
   // });
   //
   // this.gradeGroup.patchValue({
   //   grade: this.grade
   // })






  ngOnInit() {
    this.grade = this.gradeService.getter();
  }

//   onSubmit() {
//   this.grade = this.prepareSaveGrade();
//   const studentId: number = +this.route.snapshot.paramMap.get('studentid');
//   const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
//   this.gradeService.updateGrade(this.grade).subscribe((grade)=>{
//     console.log(grade);
//     this.router.navigate(['/subject/'+subjectId+'/student/'+studentId])   //+'/grade'
//   }, (error)=>{
//     console.log(error);
//   });
// }

prepareSaveGrade(): Grade {
  const gradeModel = this.gradeGroup.value;

  const saveGrade: Grade = {
    id: this.grade.id,
    grade: gradeModel.grade as enumGrade,
    comment: gradeModel.comment as string,
    finalGrade: gradeModel.finalGrade as boolean
  };
  return saveGrade;
}




  onSubmit() {
    const studentId: number = +this.route.snapshot.paramMap.get('studentid');
    const subjectId: number = +this.route.snapshot.paramMap.get('subjectid');
    this.grade = this.prepareSaveGrade();
    if(this.grade.id==undefined) {
      this.gradeService.createGrade(this.grade, studentId, subjectId).subscribe((grade)=>{
        console.log(grade);
        this.router.navigate(['/subject/'+subjectId+'/student/'+studentId])   //+'/grade'
      }, (error)=>{
        console.log(error);
      });
    }else {
      this.gradeService.updateGrade(this.grade).subscribe((grade)=>{
        console.log(grade);
        this.router.navigate(['/subject/'+subjectId+'/student/'+studentId])   //+'/grade'
      }, (error)=>{
        console.log(error);
      });
    }
  }

}
