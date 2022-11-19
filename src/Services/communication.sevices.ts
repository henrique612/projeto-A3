import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CourseType, Lessons, ModuleType } from 'src/Types/Course';

@Injectable()
export class CommunicationService {
  constructor(private http: HttpClient) { }
  
  requestCourses(): Observable<Array<CourseType>> {
    return this.http.get<Array<CourseType>>('http://localhost:8080/api/courses')
  }

  requestCourse( courseId: string ): Observable<CourseType> {
    return this.http.get<CourseType>(`http://localhost:8080/api/course/${courseId}`)
  }

  requestModules(courseId: string): Observable<Array<ModuleType>> {
    return this.http.get<Array<ModuleType>>(`assets/modules.json?courserId=${courseId}`)
  }

  login(crm: string): Observable<string>{
    return this.http.post<string>(`http://localhost:8080/api/login`, {crm : '121345-65'})
  }
}