import { Component } from '@angular/core';
import { GvariableService } from './gvariable.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private gvariableService: GvariableService) {
    }
    isOn = false; 
    title = 'webtemplate';
    receiveEvent($event) {
        this.isOn = $event
    }
    showAside() {
        return this.gvariableService.showAside;
    }
    changeAside() {
        this.gvariableService.showAside = !this.gvariableService.showAside; 
    }
}
