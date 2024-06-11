import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  book: {
    image : string,
    title: string;
    author: string;
    country: string;
    pages: number;
    quantity : number;
  };
}
