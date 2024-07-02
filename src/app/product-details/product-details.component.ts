import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
    })

    // this.activatedRoute.paramMap.subscribe((data) => {
    //   console.log(data.get('id')) // 1
    //   console.log(data.get('category'))  // electronics
    // })
  }
}
