import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./features/product/pages/product.routes').then(
				(m) => m.PRODUCT_ROUTES,
			),
	},
	{
		path: 'cart',
		loadChildren: () =>
			import('./features/cart/pages/cart.routes').then((m) => m.CART_ROUTES),
	},
];
