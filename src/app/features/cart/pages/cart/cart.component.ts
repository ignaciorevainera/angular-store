import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../../ui/cart-item/cart-item.component';
import { CartStateService } from '../../services/cart-state.service';
import { ProductItemCart } from '../../../../shared/interfaces/product.interface';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [CartItemComponent, CurrencyPipe, JsonPipe],
	templateUrl: './cart.component.html',
})
export class CartComponent {
	shippingPrice = 10;

	state = inject(CartStateService).state;

	onRemove(id: number) {
		this.state.remove(id);
	}

	onIncrease(product: ProductItemCart) {
		this.state.update({
			product: product.product,
			quantity: product.quantity + 1,
		});
	}

	onDecrease(product: ProductItemCart) {
		this.state.update({
			...product,
			quantity: product.quantity - 1,
		});
	}
}
