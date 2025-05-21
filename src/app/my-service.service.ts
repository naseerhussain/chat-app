import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public API_LINK = "https://59bf-2409-40f2-11ad-8eaf-cc4d-cfe7-803f-ab52.ngrok-free.app/ask";

  constructor(private http: Http,) {}

  getChatResponse(msgPayload) {
    return this.http.post(this.API_LINK, msgPayload);
  }
}
