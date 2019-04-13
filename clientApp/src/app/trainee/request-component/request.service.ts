import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestInfo } from './requestInfo';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = '/request';

  constructor(private http: HttpClient) {}

  requestMail(requestInfo: RequestInfo) {
    return this.http.post(this.url, requestInfo);
  }
}
