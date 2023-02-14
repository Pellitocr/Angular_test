import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    load = true;
    products: Product [] = [];
    productsFiltered: Product [] = [];


  constructor( private http: HttpClient ) { 

    this.loadProducts();

}

 private loadProducts() {

  return new Promise((resolve, reject) =>{

  this.http.get('https://angular-html-5f937-default-rtdb.firebaseio.com/products_idx.json')
    .subscribe( (resp: any) => {
      this.products = resp;
      
      setTimeout(() => {
        
        this.load = false;
      }, 2000);
      resolve;
    });


  });

    }

    getProduct (productID: string){
      return this.http.get(`https://angular-html-5f937-default-rtdb.firebaseio.com/products/${productID}.json`)

    }

    searchProduct(term: string){

      if (this.products.length === 0) {
      this.loadProducts().then(()=>{

          this.filterProducts(term);
        });
      } else {
        this.filterProducts(term);

      }

 }
 private filterProducts(term: string) {
    //console.log(this.products);
    this.productsFiltered = [];

    term = term.toLocaleLowerCase();

    this.products.forEach(prod=>{
       
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf ( term) >=0 || tituloLower.indexOf(term)>= 0)  {
          this.productsFiltered.push(prod);
      }

    });
 }

}
