import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  goToDetail(id:string){
    this.router.navigate(['/detail',id]);
  }

  getProducts() {
    this.productsService.getAllProducts()
    .subscribe(data =>{
        this.products = data;
    });
  }

}


