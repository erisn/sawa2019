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
  primary:boolean=true;
  secondary:boolean=false;
  third:boolean=false;

  constructor(private profileService: ProfileService) {}

  submitProfile() {
    console.log (this.profileInfo);

    this.profileService
      .sendProfile(this.profileInfo)
      .subscribe(
        data => console.log('Post request success!', data),
        error => console.log('Error!', error)
      );
  }
  ngOnInit() {}
}
