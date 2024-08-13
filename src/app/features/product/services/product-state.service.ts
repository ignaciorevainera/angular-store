import { Injectable } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductService } from './product.service';
import { catchError, map, startWith, Subject, switchMap } from 'rxjs';

interface State {
	products: Product[];
	status: 'loading' | 'success' | 'error';
	page: number;
}

@Injectable({
	providedIn: 'root',
})
export class ProductStateService {
	constructor(private productService: ProductService) {}

	private initialState: State = {
		products: [],
		status: 'loading' as const,
		page: 1,
	};

	changePage$ = new Subject<number>();

	loadProducts$ = this.changePage$.pipe(
		startWith(1),
		switchMap((page) => this.productService.getProducts(page)),
		map((products) => ({ products, status: 'success' as const })),
		catchError(() => [{ products: [], status: 'error' as const }]),
	);

	state = signalSlice({
		initialState: this.initialState,
		sources: [
			this.changePage$.pipe(
				map((page) => ({ page, status: 'loading' as const })),
			),
			this.loadProducts$,
		],
	});
}
