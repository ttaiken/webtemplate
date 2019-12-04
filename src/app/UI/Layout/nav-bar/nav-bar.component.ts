import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showing: boolean = false;
  @Output() showEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
    showAside() {
        this.showing = !this.showing;
        this.showEvent.emit(this.showing);
    }
    
}
