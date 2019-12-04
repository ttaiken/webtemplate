import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './UI/Menu/dropdown/dropdown.component';
import { NavBarComponent } from './UI/Layout/nav-bar/nav-bar.component';
import { AsideComponent } from './UI/Layout/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    NavBarComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
