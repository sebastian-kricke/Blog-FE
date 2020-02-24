import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080', { responseType: 'text' }).subscribe(data => {
      console.log('data received: ');
      console.log(data);
      this.title = data;
    });
  }


}
