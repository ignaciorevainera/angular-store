import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-cart-item',
	standalone: true,
	imports: [RouterLink, CurrencyPipe],
	templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
	productCartItem = input.required<ProductItemCart>();
	onRemove = output<number>();
	onIncrease = output<ProductItemCart>();
	onDecrease = output<ProductItemCart>();
}
