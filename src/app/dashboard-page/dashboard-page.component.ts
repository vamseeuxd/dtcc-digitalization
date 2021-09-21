import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  rotation = 270;
  rotation2 = 25;
  marginAdg = -200;
  scale = 1;
  // @ts-ignore
  data;

  constructor() {
    this.data = Array.from(Array(16).keys()).map(value => {
      return {
        id: value,
        rotate: 90 + (value * 22.5)
      }
    })
  }

  ngOnInit(): void {
  }

  getTileValue(count: number) {
    return (90 + ((count - 1) * this.rotation2)) + 'deg';
  }

}
