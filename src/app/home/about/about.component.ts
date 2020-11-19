import { Component, OnInit } from '@angular/core';
// import eData from 'src/assets/newsapi.json';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as eData from 'src/assets/newsapi.json';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
News : any =eData;

  constructor( private httpService: HttpClient) { }
  Newsdata:string[];
  ngOnInit(): void {

    this.httpService.get('./assets/newsapi.json').subscribe(
      data => {
        this.Newsdata = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    console.log(eData);
  }

}
