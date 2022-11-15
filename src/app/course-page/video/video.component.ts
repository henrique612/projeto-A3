import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from "@angular/common"
import { ModuleType } from 'src/Types/Course';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    modules: Array<ModuleType> = [{
    courseKey: 'geagreaeg15',
        moduleKey: '2151651651516',
        name: 'Modulo1',
    lessons: [{
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
  }];

  constructor(private route: Location) {
      //this.modules = this.route.getState() as ModuleType
    }

  ngOnInit(): void {
    console.log(this.route.getState())
  }

}
