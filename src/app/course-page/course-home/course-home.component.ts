import { Component, OnInit } from '@angular/core';
import { CourseType, ModuleType } from 'src/Types/Course';
import {Location} from "@angular/common"

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  public course: CourseType;
  public modules: Array<ModuleType>;

  constructor(private route: Location) {
    //this.course = this.route.getState() as CourseType
    this.course = {   
      courseKey: 'bgrrengiondnsio',
      author: "Michael Reeves",
      image: "https://hackaday.com/wp-content/uploads/2020/04/surg-robot-feat.png?w=800",
      avatarAuthor: "https://i1.sndcdn.com/artworks-000347014407-cs6oui-t240x240.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in magnam fuga vero voluptatem iste optio! Quos rerum doloremque nemo veniam. Nostrum unde veniam at quos autem cum earum minima.",
      specialization: ["surgery"],
      Title: "How To Make a Surgery Robot",
    }
    this.modules = [{
      courseKey: 'geagreaeg15',
          moduleKey: '2151651651516',
          name: 'Modulo1',
      'lessons': [{
        lessonKey: 'fafewa51515',
            moduleKey: '2151651651516',
            title: 'Aula1',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },
      {
        lessonKey: 'fae1515agewa',
            moduleKey: '2151651651516',
            title: 'Aula2',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },{
        lessonKey: '151f5aefaewf515',
            moduleKey: '2151651651516',
            title: 'Aula3',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      }]
    },{
      courseKey: 'geagreaeg15',
          moduleKey: '2151651651516',
          name: 'Modulo1',
      'lessons': [{
        lessonKey: 'fafewa51515',
            moduleKey: '2151651651516',
            title: 'Aula1',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },
      {
        lessonKey: 'fae1515agewa',
            moduleKey: '2151651651516',
            title: 'Aula2',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },{
        lessonKey: '151f5aefaewf515',
            moduleKey: '2151651651516',
            title: 'Aula3',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      }]
    },{
      courseKey: 'geagreaeg15',
          moduleKey: '2151651651516',
          name: 'Modulo1',
      'lessons': [{
            lessonKey: 'fafewa51515',
            moduleKey: '2151651651516',
            title: 'Aula1',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },
      {
          lessonKey: 'fae1515agewa',
            moduleKey: '2151651651516',
            title: 'Aula2',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      },{
        lessonKey: '151f5aefaewf515',
            moduleKey: '2151651651516',
            title: 'Aula3',
            commentKey: '15165egresgois',
            videosource: 'https://ia902908.us.archive.org/25/items/o.senhor.dos.aneis.1978.1080p.bluray.h264.aac.2.05.1.dualricksz/O.Senhor.dos.Aneis.1978.1080p.BluRay.H264.AAC.2.0-5.1.DUAL-RICKSZ.mp4'
      }]
    }]
   }

  ngOnInit(): void {
  }

}
