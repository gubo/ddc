
import { HttpClient,HttpParams,HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/from';

interface APIResponse
{
  /* JsonProperty( 'page' ) */ page?:number;
  /* JsonProperty( 'total_results' ) */ total_results?:number;
  /* JsonProperty( 'total_pages' ) */ total_pages?:number;
  /* JsonProperty( 'results' ) */ results?:Movie[];
}

@Injectable()
export class API
{
  constructor( private http:HttpClient ) {}

  getPopularMovies() : Observable<Movie> {
    const observable = this.http
      .get<APIResponse>(environment.tmdb_api_endpoint + '/movie/popular?api_key=' + environment.tmdb_api_key )
      .concatMap( r => {
        // console.log( r );
        return Observable.from( r.results == null ? [] : r.results );
      } );
    return observable;
  }
}
