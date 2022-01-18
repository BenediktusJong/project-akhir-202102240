import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {
  url= "https://spa-api.aqiladigital.com/api/divisions/"
  li:any;
  constructor(private http : HttpClient) {
    this.http.get(this.url).subscribe(Response => {
      this.li= Response
    });
  }

  ngOnInit(): void {
  }

  tambahDivisi(namaInput: string, descInput: string) {
    this.http.post(this.url, {"name": namaInput, "description": descInput}).subscribe(data => {
      console.log(data);
    });
    setTimeout(()=>{ window.location.reload()}, 5000)
  }

  hapusDivisi(id: number) {
    this.http.delete(this.url + id).subscribe(data => {
      console.log(data);
    });
    setTimeout(()=>{ window.location.reload()}, 5000)
  }
}
