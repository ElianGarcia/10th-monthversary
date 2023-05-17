import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '10th-monthversary';
  finishDate: Date = new Date("05/16/2023 21:48:00");
  itsTime : boolean = false;

  spendTimeSectionImages : string[] = [
    'assets/images/spendtime/1.jpg',
    'assets/images/spendtime/2.jpg',
    'assets/images/spendtime/3.jpg',
    'assets/images/spendtime/4.jpg',
    'assets/images/spendtime/5.jpg',
    'assets/images/spendtime/6.jpg',
    'assets/images/spendtime/7.jpg',
    'assets/images/spendtime/8.jpg',
    'assets/images/spendtime/9.jpg',
    'assets/images/spendtime/10.jpg',
    'assets/images/spendtime/11.jpg',
    'assets/images/spendtime/12.jpg',
    'assets/images/spendtime/13.jpg',
    'assets/images/spendtime/14.jpg',
    'assets/images/spendtime/15.jpg',
    'assets/images/spendtime/16.jpg',
    'assets/images/spendtime/17.jpg',
    'assets/images/spendtime/18.jpg'
  ]
  goOutSectionImages : string[] = [
    'assets/images/goout/1.jpg',
    'assets/images/goout/2.jpg',
    'assets/images/goout/3.jpg',
    'assets/images/goout/4.jpg',
    'assets/images/goout/5.jpg',
    'assets/images/goout/6.jpg',
    'assets/images/goout/7.jpg',
    'assets/images/goout/8.jpg',
    'assets/images/goout/9.jpg',
    'assets/images/goout/10.jpg',
    'assets/images/goout/11.jpg',
    'assets/images/goout/13.jpg',
    'assets/images/goout/14.jpg',
    'assets/images/goout/15.jpg',
    'assets/images/goout/16.jpg',
    'assets/images/goout/17.jpg',
    'assets/images/goout/18.jpg',
    'assets/images/goout/19.jpeg',
    'assets/images/goout/20.jpg',
    'assets/images/goout/21.jpg',
    'assets/images/goout/22.jpg',
    'assets/images/goout/23.jpg',
    'assets/images/goout/24.jpg',
    'assets/images/goout/25.jpg',
    'assets/images/goout/26.jpg',
    'assets/images/goout/27.jpg',
    'assets/images/goout/28.jpg'
  ]
  flowersSectionImages : string[] = [
    'assets/images/flowers/1.jpg',
    'assets/images/flowers/2.jpg',
    'assets/images/flowers/2.1.jpg',
    'assets/images/flowers/3.jpg',
    'assets/images/flowers/3.1.jpg',
    'assets/images/flowers/4.jpg',
    'assets/images/flowers/5.jpg',
    'assets/images/flowers/6.jpg',
    'assets/images/flowers/7.jpg',
    'assets/images/flowers/8.jpg',
    'assets/images/flowers/9.jpg',
  ]
  holdHandSectionImages : string[] = [
    'assets/images/holdhand/1.png',
    'assets/images/holdhand/2.jpg',
    'assets/images/holdhand/3.jpg',
    'assets/images/holdhand/4.jpg'
  ]
  preachSectionImages : string[] = [
    'assets/images/preach/1.jpg',
    'assets/images/preach/2.jpg',
    'assets/images/preach/3.png',
    'assets/images/preach/4.jpg',
    'assets/images/preach/5.png',
    'assets/images/preach/6.jpg',
    'assets/images/preach/9.png',
    'assets/images/preach/8.jpg',
    'assets/images/preach/7.jpg'
  ]
  meetingSectionImages : string[] = [
    'assets/images/meetings/1.jpg',
    'assets/images/meetings/2.jpg',
    'assets/images/meetings/3.jpg',
    'assets/images/meetings/4.jpg',
    'assets/images/meetings/5.jpg',
    'assets/images/meetings/6.jpg',
    'assets/images/meetings/7.jpg',
    'assets/images/meetings/8.jpg',
    'assets/images/meetings/9.jpg',
    'assets/images/meetings/10.jpg',
    'assets/images/meetings/11.jpg',
    'assets/images/meetings/12.jpg',
    'assets/images/meetings/13.jpg',
    'assets/images/meetings/14.jpg',
    'assets/images/meetings/15.jpg',
    'assets/images/meetings/16.jpg',
    'assets/images/meetings/17.jpg',
    'assets/images/meetings/18.jpg'
  ]

  time!: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  constructor() {
    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
  }

  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();

    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };

    this.start().subscribe(_ => console.log("tik"));
  }

  updateTime() {
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    
    if(diff < 0){
      this.itsTime = true;
      this.start();
      return;
    }
    
    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time = {};
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }
  
  // Ejecutamos la acción cada segundo, para obtener la diferencia entre el momento actual y el objetivo
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}
