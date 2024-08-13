import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../services/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../cart/services/cart-state.service';

@Component({
	selector: 'app-product-detail',
	standalone: true,
	imports: [CurrencyPipe],
	templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
	productDetailStateService = inject(ProductDetailStateService).state;
	cartState = inject(CartStateService).state;

	id = input.required<string>();

	constructor() {
		effect(() => {
			this.productDetailStateService.getById(this.id());
		});
	}

	addToCart() {
		this.cartState.add({
			product: this.productDetailStateService.product()!,
			quantity: 1,
		});
	}
}
