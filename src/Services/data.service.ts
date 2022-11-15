import { CourseType, Lessons, ModuleType } from "src/Types/Course";
import { UserType } from "src/Types/User";
import {Subject, Observable, throwError} from "rxjs"
import { Injectable } from '@angular/core';
import { CommunicationService } from "./communication.sevices";

export class dataService {
    constructor(
        private course: Subject<CourseType>,
        private modules: Subject<Array<ModuleType>>, 
        private lesson: Subject<Lessons>,
        private courses: Subject<Array<CourseType>>,
        private serssionId: string,
        private user: Subject<UserType>,
        private config: any,
        private comService: CommunicationService
        ) {
            this.comService.requestCourses().subscribe((data: Array<CourseType>) => this.setCourseList(data))
        }

    getCurrentCourse(): Observable<CourseType> {
        return this.course as Observable<CourseType>
    }

    getCurrentUser(): Observable<UserType> {
        return this.user as Observable<UserType>
    }

    getCurrentModules(): Observable<Array<ModuleType>> {
        return this.modules as Observable<Array<ModuleType>>
    }

    getCurrentLesson(): Observable<Lessons> {
        return this.lesson as Observable<Lessons>
    }

    setCurrentUser(newUser: UserType): void {
        this.user.next(newUser)
    }

    setCurentCourse(newCourse: CourseType): void {
        this.course.next(newCourse)
    }

    setCourseList(newCourses: Array<CourseType>): void {
        this.courses.next(newCourses)
    }

    setCurrentModules(newModules: Array<ModuleType>) {
        this.modules.next(newModules)
    }
}