import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { products} from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products
  constructor() { }

  ngOnInit(): void {
  }

  share(productName){
    window.alert('The product:' + productName + ' has been shared!')
  }

  onNotify(name){
    window.alert('name: '+name)
  }
}
