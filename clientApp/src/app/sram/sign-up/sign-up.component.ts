import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { SignUpInfo } from './signUpInfo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 signUpInfo = new SignUpInfo;

  constructor(private signUpService: SignUpService, private router: Router) { }

  submitForm() {
    this.signUpService.signUp(this.signUpInfo)
    .subscribe(
        data => console.log('Post request success!', data),
        error => console.log('Error!', error)
      );
      // Alert for successful sent message and routing to another page
      alert('Registration Submitted Successfully!');
      this.router.navigateByUrl('/sign');

  }


  ngOnInit() {

  }

}
