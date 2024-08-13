import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStateService } from '../../../features/cart/services/cart-state.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixShoppingCart2Fill, remixStore2Fill } from '@ng-icons/remixicon';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, NgIconComponent],
	viewProviders: [provideIcons({ remixShoppingCart2Fill, remixStore2Fill })],
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	cartState = inject(CartStateService).state;
}
