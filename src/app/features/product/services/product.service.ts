import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../shared/services/base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interfaces/product.interface';

const LIMIT = 5;

@Injectable({
	providedIn: 'root',
})
export class ProductService extends BaseHttpService {
	getProducts(page: number): Observable<Product[]> {
		return this.http.get<any[]>(`${this.apiURL}/products`, {
			params: {
				limit: page * LIMIT,
			},
		});
	}

	getProductById(id: string): Observable<Product> {
		return this.http.get<Product>(`${this.apiURL}/products/${id}`);
	}
}
