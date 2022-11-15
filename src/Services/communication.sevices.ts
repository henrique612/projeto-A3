import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CourseType, Lessons, ModuleType } from 'src/Types/Course';

@Injectable()
export class CommunicationService {
  constructor(private http: HttpClient) { }
  
  requestCourses(): Observable<Array<CourseType>> {
    return this.http.get<Array<CourseType>>('http://localhost:3000/api/courses/get')
  }

  requestModules(): Observable<Array<ModuleType>> {
    return this.http.get<Array<ModuleType>>('http://localhost:3000/api/courses/modules')
  }

  requestLessons(): Observable<Array<Lessons>> {
    return this.http.get<Array<Lessons>>('http://localhost:3000/api/courses/lessons')
  }

}