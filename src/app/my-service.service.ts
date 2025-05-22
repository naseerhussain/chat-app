import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public API_LINK = "https://a91c-2409-40f2-209c-8059-7f-ac0d-e5b3-bcf1.ngrok-free.app/ask";

  constructor(private http: Http,) {}

  getChatResponse(msgPayload) {
    return this.http.post(this.API_LINK, msgPayload);
  }
}
