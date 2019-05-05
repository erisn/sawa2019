import { Component, OnInit } from '@angular/core';
import { RequestInfo } from './requestInfo';
import { RequestService } from './request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-component',
  templateUrl: './request-component.component.html',
  styleUrls: ['./request-component.component.css']
})
export class RequestComponentComponent implements OnInit {

  requestInfo = new RequestInfo();


  constructor (private requestService: RequestService, private router: Router) {}


  submitRequest() {

    this.requestService.requestMail(this.requestInfo)
      .subscribe(
          data => console.log ('POST request Success!', data),
          error => console.log('Error!', error)
        );

      // Alert for successful sent message and routing to another page
      alert('Request sent successfully!');
      this.router.navigateByUrl('/trainee');

    }

  ngOnInit() {

  }


  }

