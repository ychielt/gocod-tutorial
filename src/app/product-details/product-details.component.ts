import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product
  constructor(private rout: ActivatedRoute , private cartServis: CartService) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe(param=>{
        this.product = products[+param.get('productId')]
    })
  }

  addToCart(product){
    this.cartServis.addToCart(product)
  }

}
