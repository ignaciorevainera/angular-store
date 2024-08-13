import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../services/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../cart/services/cart-state.service';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [ProductCardComponent],
	templateUrl: './product-list.component.html',
})
export class ProductListComponent {
	productState = inject(ProductStateService);
	cartState = inject(CartStateService).state;

	changePage() {
		const page = this.productState.state.page() + 1;
		this.productState.changePage$.next(page);
	}

	addToCart(product: Product) {
		this.cartState.add({
			product,
			quantity: 1,
		});
	}
}
