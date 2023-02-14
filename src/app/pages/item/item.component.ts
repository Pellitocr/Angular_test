import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDescription ={};
  productID: undefined;



  constructor ( private route: ActivatedRoute, 
                public productService: ProductsService ) {

  }

  ngOnInit() {

    this.route.params
    .subscribe(parameters => {
      //console.log(parameters['productID']);
      this.productService.getProduct(parameters['productID'])
        .subscribe((product:ProductDescription) => {
          this.productID = parameters['productID'];
          this.product = product;
          

        });
    
      
    });
    
  }

}
