import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
    Login(user,pass) {
      if(user=='admin' && pass=='admin')
      {
        return true;
      }
      else{
        return false;
      }
   }
   Load()
   {
     var data=[];
     for(let i=0;i<10;i++)
     {
       var item={id:i,name:"name"+i};
       data.push(item);
     }
     return data;

   }
}
