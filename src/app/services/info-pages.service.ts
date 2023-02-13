import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPage = {};
  load = false;
  team: any [] = [];

  constructor( private http: HttpClient ) { 
    this.loadInfo();
    this.loadTeam();
    
  }

  private loadInfo() {
//console.log ('InfoPage service is ready')

this.http.get('assets/data/data-page.json')
.subscribe( (resp: InfoPage) => {

  this.load = true;
  this.info = resp;


});

  }

  private loadTeam(){

this.http.get('https://angular-html-5f937-default-rtdb.firebaseio.com/team.json')
.subscribe( (resp: any) => {

  this.team = resp;
  //console.log(resp);

});


  }



}
