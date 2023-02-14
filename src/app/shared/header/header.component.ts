import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _service: InfoPagesService,
                private router:Router ) {

  }
  ngOnInit(){
  }

  searchProduct (term: string) {

    if(term.length < 1) {

      return;
    }

    this.router.navigate(['/search', term]);

  }

}
