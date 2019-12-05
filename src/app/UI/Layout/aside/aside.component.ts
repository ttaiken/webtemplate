import { Component, OnInit } from '@angular/core';
import { GvariableService } from '../../../gvariable.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

    constructor(private gvariableService: GvariableService) { }

  ngOnInit() {
  }

    showAside() {
        this.gvariableService.showAside = !this.gvariableService.showAside;
    }
    coordinates(event: MouseEvent): void {
        if (event.x > 168) {
            this.showAside();
        }
    }

}
