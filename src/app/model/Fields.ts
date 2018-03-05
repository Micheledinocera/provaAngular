import { Sku } from './Sku';
import { Query } from './Query';
import { Facet } from './Facet';
import { Category } from './Category';
import { TreeviewItem } from 'ngx-treeview';

export class Fields {

  skus: Sku[] = [];
  queries: Query[] = [];
  facets: Facet[] = [];
  categories: TreeviewItem[] = [];
  facetsUnselectedDynamic: boolean;

  constructor(data: any) {
    this.facetsUnselectedDynamic = data.facetsUnselectedDynamic ? data.facetsUnselectedDynamic : false;
    for (const sku of data.skus)
      this.skus.push(new Sku(sku));
    for (const query of data.queries)
      this.queries.push(new Query(query));
    for (const facet of data.facets)
      this.facets.push(new Facet(facet));
    for (const category of data.categories)
      this.categories.push(new TreeviewItem(category));
  }

  static getDummyFields() {
    return {
      skus: Sku.getDummySkus(),
      queries: Query.getDummyQueries(),
      facets: Facet.getDummyFacets(),
      categories: Category.getDummyCategories()
    };
  }
}
