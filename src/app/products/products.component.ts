import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: any = { productID: 1, productName: "Televeison", category: 'electronics' }
  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }

  goProduct(product: any) {
    this.router.navigate(['/products/details', product.productID]);
  }
  Checkout() {
    this.router.navigateByUrl('/products/checkout');
  }

}
