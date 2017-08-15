import { Component, OnInit } from '@angular/core';
import { DsService } from './app.service';
import { PushNotificationsService } from 'angular2-notifications';

declare var deepstream: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = '';
  eventsReceived = [];

  constructor(private dsService: DsService, private pushService: PushNotificationsService) { }

  ngOnInit() {
    this.pushService.requestPermission();
    this.dsService.dsInstance.event.subscribe('test-event', (val) => {
      this.eventsReceived.push(val);
      this.pushService.create('Wamland', { body: val, icon: "favicon.ico" }).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    })
  }

  handleClick() {
    console.log(this.value)
    this.dsService.dsInstance.event.emit('test-event', this.value);
  }
}
