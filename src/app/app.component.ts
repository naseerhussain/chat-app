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
      const respose = res["message"];
      this.msgs.push({type:"ChatGPT", "msg": respose});
    })
  }


}
