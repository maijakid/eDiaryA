import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Grade } from '../grade';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class GradeService {
  private gradeUrl:string = 'http://localhost:8080/api/v1/grade';
  private headers = new Headers({'Content.Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  private grade:Grade;
  // studentId: number = +this.route.snapshot.paramMap.get('studentid');
  // subjectId: number = +this.route.snapshot.paramMap.get('subjectid');

  constructor(private http:Http,  //umesto httpClient???
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  getGrades(studentId:number, subjectId:number){
    return this.http.get(this.gradeUrl+'/'+
    studentId+'/'+subjectId, this.options)  //"${this.gradeUrl}${studentId}${subjectId}"
    // return this.http.get(this.router.navigate(gradeUrl,)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteGrade(id: number){
    return this.http.delete(this.gradeUrl+"/"+id, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createGrade(grade:Grade, studentId:number, subjectId:number) {
    return this.http.post(this.gradeUrl+'/'+
    studentId+'/'+subjectId,grade, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateGrade(grade:Grade) {
    return this.http.put(this.gradeUrl+'/'+grade.id, grade, this.options) //JSON.stringify(grade) samo grade
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  setter(grade:Grade) {
    this.grade=grade;
  }

  getter() {
    return this.grade;
  }


  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }


}
