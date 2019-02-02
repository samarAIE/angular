import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myname:string;
  pass:string;
  status:boolean;
  names:Array<Object>;
  constructor( private mylogin:LoginService)
  {
    var first=this.mylogin.Login('admin','admin');
    var second=this.mylogin.Login('admin','admin');
    console.log(first,second)

  }
  Show() 
  {
    console.log(this.myname);
    
  }
  submit()
  {
    var result=this.mylogin.Login(this.myname,this.pass);
   
    this.status=result;
    //console.log(status);
    this.loadNames();
    console.log(this.names);
  }
  loadNames()
  {
    this.names=this.mylogin.Load();

  }
}
