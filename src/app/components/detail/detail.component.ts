import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    productId:String = this.activeRoute.snapshot.params['id'];

  constructor(
    private router:Router,
    private productsServie:ProductService,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
  }

}
