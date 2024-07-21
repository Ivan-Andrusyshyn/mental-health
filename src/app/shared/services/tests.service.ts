import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Test } from '../models/online-test.model';
import { testsList } from '../../options/tests-list';
import { TestsResult } from '../models/testsResult.model';
import { testsResult } from '../../options/tests-options';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  private tests: Test[];
  private testResults: TestsResult[];
  private productsService = inject(ProductsService);

  recomendProducts = new BehaviorSubject<Product[]>([]);
  constructor() {
    this.tests = testsList;
    this.testResults = testsResult;
  }

  getTests(): Test[] {
    return this.tests;
  }

  getTestResults(): TestsResult[] {
    return this.testResults;
  }

  getTestResultText(
    result: TestsResult,
    score: number
  ): {
    text: string;
    problem: string;
    recomendIdList: number[] | null;
  } | null {
    for (const explanation of result.explanation) {
      if (score >= explanation.range.min && score <= explanation.range.max) {
        return {
          text: explanation.text,
          problem: explanation.results,
          recomendIdList: explanation.recomendIdList || null,
        };
      }
    }
    return null;
  }

  filterProducts(recomendIdList: number[]): void {
    const allProducts = this.productsService.getProducts();

    const products = allProducts.filter((item) => {
      return recomendIdList.includes(item.id);
    });

    this.recomendProducts.next(products);
  }
}
