import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ProfileInfo } from './profileInfo';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  profileInfo = new ProfileInfo();

  profileModel: any;

  constructor(private profileService: ProfileService) {}

  submitProfile() {
    console.log (this.profileInfo);

    this.profileService
      .sendProfile(this.profileInfo)
      .subscribe(
        data => {
          // this.profileModel = data;
          console.log('Post request success!', data);
        },
        error => console.log('Error!', error)
      );
  }

  getProfile() {


    this.profileService
      .getProfile()
      .subscribe(
        data => {
          this.profileModel = data;
          console.log('Get request success!', data);
        } ,
        error => console.log('Error!', error)
      );
  }
  ngOnInit() {
    this.getProfile();
  }
}
