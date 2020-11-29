import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []
  constructor( private http: HttpClient) { }

  addToCart(product){
    this.items.push(product)
    window.alert("the product "+product.name+" has been added to the cart!")
  }

  getItems(){
    return this.items
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  clearCart(){
    this.items=[]
  }

}
