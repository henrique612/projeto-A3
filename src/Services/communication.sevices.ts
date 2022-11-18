import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CourseType, Lessons, ModuleType } from 'src/Types/Course';

@Injectable()
export class CommunicationService {
  constructor(private http: HttpClient) { }
  
  requestCourses(): Observable<Array<CourseType>> {
    return this.http.get<Array<CourseType>>('assets/courses.json')
  }

  requestCourse( courseId: string ): Observable<CourseType> {
    return this.http.get<CourseType>(`assets/course.json?courserId=${courseId}`)
  }

  requestModules(courseId: string): Observable<Array<ModuleType>> {
    return this.http.get<Array<ModuleType>>(`assets/modules.json?courserId=${courseId}`)
  }
//  
 // }
 // requestLessons(): Observable<Array<Lessons>> {
 //   return this.http.get<Array<Lessons>>('http://localhost:3000/api/courses/lessons')
 // }

}