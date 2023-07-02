import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher/searcher.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SearcherComponent,
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent, SearcherComponent, SidemenuComponent
  ]
})
export class SharedModule { }
