import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileInfo } from './profileInfo';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = '/profile';
  urlGetProf = '/profile/getprofile';

  constructor(private http: HttpClient) { }

  sendProfile (profileInfo: ProfileInfo) {
    return this.http.post<any>(this.url, profileInfo);
  }

  getProfile () {
    return this.http.get<any>(this.urlGetProf);
  }
}
