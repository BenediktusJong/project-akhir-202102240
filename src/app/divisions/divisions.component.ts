import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {
  url= "https://spa-api.aqiladigital.com/api/divisions"
  li:any;
  constructor(private http : HttpClient) {
    this.http.get(this.url).subscribe(Response => {
      this.li= Response
    });
  }

  ngOnInit(): void {
  }

  private tambahDivisi() {
    this.http.post(this.url, {})
  }
}
