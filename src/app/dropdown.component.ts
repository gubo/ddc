
import { Component,OnInit,AfterViewInit,OnDestroy,Input,ViewEncapsulation } from '@angular/core';
import { Oops } from './oops.service';
import { API } from './api.service';
import { Movie } from './movie';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropDownComponent implements OnInit,AfterViewInit,OnDestroy
{
  @Input() movies?:Movie[] = [];

  prefix = 'Movie: ';
  selected?: Movie = null;
  titleclass = 'title';
  listclass = 'list';
  clearclass = 'clear';

  private opened = false;

  constructor( private oops:Oops,private api:API ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(f => { this.ready(); } );
  }

  toggle() {
    if ( this.opened ) {
      this.close();
    } else {
      this.open();
    }
  }

  select( movie:Movie ) {
    this.selected = movie;
    this.clearclass = 'clear show';
    this.close();
  }

  clear() {
    this.selected = null;
    this.clearclass = 'clear';
  }

  ngOnDestroy(): void {
    this.movies = [];
    this.selected = null;
  }

  private ready() {}

  private open() {
    this.titleclass = 'title open';
    this.listclass = 'list open';
    this.opened = true;
  }

  private close() {
    this.titleclass = 'title';
    this.listclass = 'list';
    this.opened = false;
  }
}
