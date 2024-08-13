import { Component, input, output } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixAddFill } from '@ng-icons/remixicon';

@Component({
	selector: 'app-product-card',
	standalone: true,
	imports: [RouterLink, CurrencyPipe, NgIconComponent],
	viewProviders: [provideIcons({ remixAddFill })],
	templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
	product = input.required<Product>();

	add = output<Product>();

	addToCart(event: Event) {
		event.stopPropagation();
		event.preventDefault();
		this.add.emit(this.product());
	}
}
