import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStateService } from '../../../features/cart/services/cart-state.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	cartState = inject(CartStateService).state;
}
