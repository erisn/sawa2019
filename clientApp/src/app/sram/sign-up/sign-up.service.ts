import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInfo } from './signUpInfo';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = '/insert';

  constructor(private http: HttpClient) {}

  signUp(signUpInfo: SignUpInfo) {
    return this.http.post<any>(this.url, signUpInfo);
  }
}
