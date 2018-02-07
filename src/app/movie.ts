
import { Item } from './item';

export interface Movie extends Item
{
  /* JsonProperty( 'id' ) */ id?:number;
  /* JsonProperty( 'title' ) */ title?:string;
  /* JsonProperty( 'poster_path' ) */ poster_path?:string;
  /* JsonProperty( 'overview' ) */ overview?:string;
  /* JsonProperty( 'backdrop_path' ) */ backdrop_path?:string;
}
