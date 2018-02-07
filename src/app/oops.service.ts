
import { Injectable } from '@angular/core';

@Injectable()
export class Oops
{
  onError( error?:Error ) {
    console.log( error );
  }
}
