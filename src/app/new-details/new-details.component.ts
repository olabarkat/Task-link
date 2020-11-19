import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as eData from 'src/assets/newsapi.json';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent implements OnInit {
  News : any =eData;
  constructor( private httpService: HttpClient) { }
  Newsdata;
  newsarray;


  ngOnInit(): void {
    this.httpService.get('./assets/newsapi.json').subscribe(
      newsarray => {
        this.Newsdata = newsarray as string [1];	 // FILL THE ARRAY WITH DATA.
         console.log(this.Newsdata[1]);
         
       this.newsarray=this.Newsdata[1] ;
       console.log(this.newsarray)
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    console.log(eData);
    
  }

}
