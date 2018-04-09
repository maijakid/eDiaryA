import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Subject } from '../subject';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class SubjectService {
  private subjectUrl:string = 'http://localhost:8080/api/v1/subject';
  private headers = new Headers({'Content.Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private http:Http,
    private route: ActivatedRoute,
    private location: Location) { }

  getAllSubjects(){
    return this.http.get(this.subjectUrl, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getSubjectId() {
    const idSubject = +this.route.snapshot.paramMap.get('id');
    // this.subjectService.getSubjectId(id)
    //   .subscribe(subject => this.subject = subject);
  }

  // getSubjects(): Observable<Subject[]> {
  //   return of (subjects);
  // }

  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }


}
