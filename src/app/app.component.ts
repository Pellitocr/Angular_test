import { Component } from '@angular/core';
import { InfoPagesService } from './services/info-pages.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public _infoPageService: InfoPagesService,
                public _productsService: ProductsService ) {


  }
}
