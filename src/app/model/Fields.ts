import { Sku } from './Sku';
import { Query } from './Query';
import { Facet } from './Facet';
import { Category } from './Category';
import { TreeviewItem } from 'ngx-treeview';

export class Fields {

  skus: Sku[] = [];
  queries: Query[] = [];
  facets: Facet[] = [];
  categories: Category[] = [];

  constructor(data: any) {
    for (const sku of data.skus)
      this.skus.push(new Sku(sku));
    for (const query of data.queries)
      this.queries.push(new Query(query));
    for (const facet of data.facets)
      this.facets.push(new Facet(facet));
    for (const category of data.categories)
      this.categories.push(new Category(category));
  }

  static getDummyFields() {
    return {
      skus: [new Sku(
        {
            value: 'sku1',
            checked: true,
            isMain: false
        }), new Sku({
            value: 'sku2',
            checked: true,
            isMain: false
        }), new Sku({
            value: 'sku3',
            checked: true,
            isMain: true
        }), new Sku({
            value: 'sku4',
            checked: true,
            isMain: false
        })
      ],
      queries: [
        {
            value: 'title',
            checked: true
        }, {
            value: 'rating',
            checked: false
        }, {
            value: 'price',
            checked: false
        }, {
            value: 'description',
            checked: false
        }
      ],
      facets: [
        {
            value: 'color',
            type: 'checkbox',
            checked: 'true'
        }, {
            value: 'size',
            type: 'checkbox',
            checked: 'true'
        }, {
            value: 'price',
            type: 'slider',
            checked: 'true'
        }, {
            value: 'rating',
            type: 'radio',
            checked: 'true'
        },
      ],
      categories: [
        new TreeviewItem({
            text: 'Category1', value: '1', children: [
                { text: 'Sub-Category1-1', value: 11 },
                { text: 'Sub-Category1-2', value: 12 },
                { text: 'Sub-Category1-3', value: 13 }
            ]
        }),
        new TreeviewItem({
            text: 'Category2', value: 2, children: [
                {
                    text: 'Sub-Category2-1', value: 21, children: [{
                        text: 'Sub-Category2-1-1', value: 211, children: [
                            { text: 'Sub-Category2-1-1-1', value: 2111 },
                            { text: 'Sub-Category2-1-1-2', value: 2112 }
                        ]
                    }, {
                        text: 'Sub-Category2-1-2', value: 212, children: [
                            { text: 'Sub-Category2-1-2-1', value: 2121 },
                            { text: 'Sub-Category2-1-2-2', value: 2122 },
                        ]
                    }]
                },
                {
                    text: 'Sub-Category2-2', value: 22, children: [
                        { text: 'Sub-Category2-1-1', value: 221 },
                        { text: 'Sub-Category2-1-2', value: 222 }
                    ]
                }
            ]
        })
      ]
    };
  }
}
