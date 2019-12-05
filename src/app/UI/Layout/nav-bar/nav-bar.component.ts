import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GvariableService } from '../../../gvariable.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    constructor(private gvariableService: GvariableService) { }

  ngOnInit() {
  }
    showAside() {
        this.gvariableService.showAside = !this.gvariableService.showAside;
      
    }
    
}
