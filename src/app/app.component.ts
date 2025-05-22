import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "./my-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'chat-app';
  public text = "";
  public msgs = [];


  constructor(private myService:MyServiceService){}

  ngOnInit() {
    
  }

  clear() {
    this.msgs = [];
  }

  sendMessage() {
    const msgPayload = { message: this.text };
    this.msgs.push({type:"User", "msg": this.text});
    this.myService.getChatResponse(msgPayload).subscribe(res => {
      const respose = (JSON.parse(res["_body"])).message;
      this.msgs.push({type:"AI Bot", "msg": respose});
      this.text = "";
    }, err => {
      this.msgs.push({type:"AI Bot", "msg": "I cannot answer at the moment, please try again after sometime"});
      this.text = "";
    });
    
  }


}
