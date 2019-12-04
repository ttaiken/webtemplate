import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isOn = false; 
    title = 'webtemplate';
    receiveEvent($event) {
        this.isOn = $event
    }
}
