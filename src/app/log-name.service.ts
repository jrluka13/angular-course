import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogNameService {

  logText(arg:string){
    console.log(arg)
  }

  constructor() { }
}
