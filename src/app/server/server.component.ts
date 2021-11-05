import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    allowNewServe = false;
    serverCreatingStatus = " No server is created yet";
    serverName = '';



  constructor() { 
    setTimeout(() =>{
      this.allowNewServe = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onServerCreating(){
    this.serverCreatingStatus = "Server is created in " + this.serverName;
  }
  onupdateServerName(){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
