import { Component, OnInit } from '@angular/core';
import { RequestInfo } from './requestInfo';
import { RequestService } from './request.service';

@Component({
  selector: 'app-request-component',
  templateUrl: './request-component.component.html',
  styleUrls: ['./request-component.component.css']
})
export class RequestComponentComponent implements OnInit {

  requestInfo = new RequestInfo();

  constructor (private requestService: RequestService) {}

  submitRequest() {

    // console.log(this.requestInfo);

    this.requestService.requestMail(this.requestInfo)
      .subscribe(
          data => console.log ('Success!', data),
          error => console.error('Error!', error)
        );

  }

  ngOnInit() {}


  }

