import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/Services/communication.sevices';
import { dataService } from 'src/Services/data.service';
import { CourseType } from 'src/Types/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private commService: CommunicationService,
      private dataService: dataService
      ) {
      this.commService.requestCourses().subscribe( 
        (data : Array<CourseType>) =>{ 
          this.setCourseList(data)
        }
        )
   }

  setCourseList(courses: Array<CourseType>): void {
    this.dataService.setCourseList(courses)
  }

  ngOnInit(): void {
  }


}
