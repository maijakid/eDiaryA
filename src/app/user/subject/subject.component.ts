import { Component, OnInit, Input } from '@angular/core';
import { SubjectService } from '../../service/subject.service';
import { Subject } from '../../subject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  private subjects:Subject[];
  selectedSubject: Subject;

  constructor(private router:Router, private subjectService:SubjectService) { }

  ngOnInit() {
    this.subjectService.getAllSubjects().subscribe((subjects)=>{
      console.log(subjects);
      this.subjects=subjects;
    },(error)=>{
      console.log(error);
    })
  }

  onSelect(subject: Subject): void {
    this.selectedSubject = subject;
  }

  // goToPath(subject) {
  //   this.router.navigate(['/subject/:id']);
  //   this.selectedSubject = subject; //treba li ovo kad vec imam id???
  // }

  // getSubjects(): void {
  // this.subjectService.getAllSubjects()
  //     .subscribe(subjects => this.subjects = subjects);
  // }

}
