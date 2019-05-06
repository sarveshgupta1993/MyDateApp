import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
   values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }

getvalues() {
   this.http.get('http://localhost:5000/api/Values').subscribe(
     response => {
    this.values = response;
// tslint:disable-next-line: no-shadowed-variable
  }, error => {
       console.log(error);
     }
   );
}

}
