
import { Component,OnInit,OnDestroy } from '@angular/core';
import { Oops } from './oops.service';
import { API } from './api.service';
import { Movie } from './movie';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy
{
  movies:Movie[];

  constructor( private oops:Oops,private api:API ) {}

  ngOnInit(): void {
    this.movies = [];

    this.api.getPopularMovies()
      .filter( m => m != null )
      .subscribe(
      m => {
          m.label = m.title;
          this.movies.push( m );
        },
      e => { this.oops.onError( e ); },
      () => {}
     );
  }

  ngOnDestroy(): void {
    this.movies = [];
  }
}
