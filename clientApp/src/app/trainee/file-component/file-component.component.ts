import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fileinfo} from './fileinfo';

@Component({
  selector: 'app-file-component',
  templateUrl: './file-component.component.html',
  styleUrls: ['./file-component.component.css']
})
export class FileComponentComponent implements OnInit {
  file: string;
  fileToUpLoad: File = null;
  fileinfos: Fileinfo[] = [];
  fileinfosMap = new Map<string, Fileinfo>();


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload() {
    console.log('I am clicked .....');
    let fileinfo: Fileinfo;
    fileinfo = new Fileinfo();
    fileinfo.owner = 'OwnerToAll';
    fileinfo.filename = this.fileToUpLoad.name;
    fileinfo.data = this.fileToUpLoad.lastModified;
    fileinfo.size = this.fileToUpLoad.size;
    this.fileinfos.push(fileinfo);
    this.fileinfosMap.set(this.fileToUpLoad.name, fileinfo);

    const fd = new FormData();
    fd.append('file', this.fileToUpLoad, this.fileToUpLoad.name);
    this.http.post('/upload', fd , {
      reportProgress: true,
      observe: 'events'
    }).subscribe(events => {
      console.log(events);
    });
  }

  upload2(event) {
    console.log(event);
    this.fileToUpLoad = <File>event.target.files[0];

    console.log('I am clicked event trigger *****');
  }

  removeFile(key) {
    this.fileinfosMap.delete(key);
  }


 // ngOnChanges(files: FileList) {
   // this.fileToUpload = files.item(0);
    // console.log('I am clicked event trigger *****');
 // }
}
