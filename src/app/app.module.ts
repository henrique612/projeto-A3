import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http';


import { CursoComponent } from './curso-card/curso.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { VideoComponent } from './course-page/video/video.component';
import { HomeComponent } from './home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseHomeComponent } from "./course-page/course-home/course-home.component"
@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CabecalhoComponent,
    VideoComponent,
    HomeComponent,
    CoursePageComponent,
    CourseHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    NguCarouselModule,
    MatIconModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    VgControlsModule,
    VgCoreModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
