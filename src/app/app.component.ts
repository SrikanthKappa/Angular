import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponents';
  city:string="Anantapuram City";
  d:string=new Date().toLocaleTimeString();
  settimeout=setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  },1000);

}
