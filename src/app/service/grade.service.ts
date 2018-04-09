import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Grade } from '../grade';

@Injectable()
export class GradeService {
  private gradeUrl:string = 'http://localhost:8080/api/v1/grade';
  private headers = new Headers({'Content.Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private http:Http) { }

  // getGrades(){
  //   // return this.http.get(this.gradeUrl+'/'+, this.options)
  //   return this.http.get(this.router.navigate(gradeUrl,)
  //   .map((response:Response)=>response.json())
  //   .catch(this.errorHandler);
  // }

  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }


}
