import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../app.component.css']
})
export class ServerComponent implements OnInit {
serverID=10;
serverStatus='offline';
getServerStatus()
{
  return this.serverStatus;
}
  constructor() { }

  ngOnInit() {
  }

}
