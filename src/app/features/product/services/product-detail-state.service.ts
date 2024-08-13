import { Injectable } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductService } from './product.service';
import { catchError, map, Observable, switchMap } from 'rxjs';

interface State {
	product: Product | null;
	status: 'loading' | 'success' | 'error';
}

@Injectable({
	providedIn: 'root',
})
export class ProductDetailStateService {
	constructor(private productService: ProductService) {}

	private initialState: State = {
		product: null,
		status: 'loading' as const,
	};

	state = signalSlice({
		initialState: this.initialState,
		actionSources: {
			getById: (_state, $: Observable<string>) =>
				$.pipe(
					switchMap((id) => this.productService.getProductById(id)),
					map((product) => ({ product: product, status: 'success' as const })),
					catchError(() => [{ product: null, status: 'error' as const }]),
				),
		},
	});
}
