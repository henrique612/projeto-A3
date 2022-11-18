import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { of, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { dataService } from 'src/Services/data.service';
import { CourseType } from 'src/Types/Course';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public coursesList: Observable<CourseType[]>;
  
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 4, all: 0 },
    speed: 300,
    point: {
      visible: true
    },
    touch: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };

  constructor(private dataService: dataService) {
    this.coursesList = this.dataService.getCourseList().pipe(
      map((data) => {return data;})
    );
   }

  saveCurrentCourse(course: CourseType): void {
    this.dataService.setCurentCourse(course)
  }

  ngOnInit(
    
  ): void {
  }

}
