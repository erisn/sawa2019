import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-file-component',
  templateUrl: './file-component.component.html',
  styleUrls: ['./file-component.component.css']
})
export class FileComponentComponent implements OnInit, OnChanges {
  file: string;

  constructor() { }

  ngOnInit() {
  }

  upload(){
    console.log('I am clicked .....');
  }

  upload2(event){
    console.log('I am clicked event trigger');
  }

  ngOnChanges() {
    console.log('I am clicked event trigger *****');
  }
}
