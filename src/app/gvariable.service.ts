import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GvariableService {
    public showAside: boolean;

    constructor() {
        this.showAside = false;
    }

}
