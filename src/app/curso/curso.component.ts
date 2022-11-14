import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { of, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { CourseType } from 'src/Types/Course';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public courseList: Observable<CourseType[]>;
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
  images = ['assets/bg.jpg', 'assets/car.png', 'assets/canberra.jpg', 'assets/holi.jpg'];

  tempData: CourseType[];
  constructor() {
    this.tempData = [
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      },
      {   
          courseKey: 'bgrrengiondnsio',
          "autor": "Michael Reeves",
          "image": "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
          "avatarAutor": "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
          "specialization": ["surgery"],
          "Title": "How To Make a Surgery Robot",
          "courseId":  "d41d8cd98f00b204e9800998ecf8427e"
      }
    ];
    this.courseList = of(1).pipe(
      startWith(-1),
      take(30),
      map(() => {
        const data = (this.tempData = [
          ...this.tempData
        ]);
        console.log(data)
        return data;
      })
    );
   }

  ngOnInit(): void {
  }

}
