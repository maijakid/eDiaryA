import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Student } from '../student';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class StudentService {
  private studentUrl:string = 'http://localhost:8080/api/v1/student';
  private headers = new Headers({'Content.Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private http:Http,
    private route: ActivatedRoute,
    private location: Location) { } //sending req to the plugin 5:06 #4

  // GET getAllStudents
  getAllStudents(){
    return this.http.get(this.studentUrl, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  // GET getById
  getById(id:number){
    return this.http.get(this.studentUrl+"/"+id, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  // DELETE deleteById
  deleteById(id:number){
    return this.http.delete(this.studentUrl+"/"+id, this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  // POST addNewStudent
  createNewStudent(student:Student){
    return this.http.post(this.studentUrl, JSON.stringify(student), this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  // PUT editStudent
  updateStudent(student:Student){
    return this.http.put(this.studentUrl, JSON.stringify(student), this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }



  //throws observable exception
  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }




}
