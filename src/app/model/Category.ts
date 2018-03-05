import { TreeviewItem } from 'ngx-treeview';

export class Category {

  categories: TreeviewItem[];

  constructor(data: any) {
    for (const category of data)
      this.categories.push(new TreeviewItem(category));
  }

  static getDummyCategories() {
    return [
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
    ];
  }

  static getDummyCategoriesUnchecked() {
    return [
      new TreeviewItem({
          checked: false, text: 'Category1', value: '1', children: [
            { checked: false, text: 'Sub-Category1-1', value: 11 },
            { checked: false, text: 'Sub-Category1-2', value: 12 },
            { checked: false, text: 'Sub-Category1-3', value: 13 }
          ]
      }),
      new TreeviewItem({
        checked: false, text: 'Category2', value: 2, children: [
          {
            checked: false, text: 'Sub-Category2-1', value: 21, children: [{
              checked: false, text: 'Sub-Category2-1-1', value: 211, children: [
                { checked: false, text: 'Sub-Category2-1-1-1', value: 2111 },
                { checked: false, text: 'Sub-Category2-1-1-2', value: 2112 }
              ]
            }, {
              checked: false, text: 'Sub-Category2-1-2', value: 212, children: [
                { checked: false, text: 'Sub-Category2-1-2-1', value: 2121 },
                { checked: false, text: 'Sub-Category2-1-2-2', value: 2122 },
              ]
            }]
          },
          {
            checked: false, text: 'Sub-Category2-2', value: 22, children: [
              { checked: false, text: 'Sub-Category2-1-1', value: 221 },
              { checked: false, text: 'Sub-Category2-1-2', value: 222 }
            ]
          }
        ]
      })
    ];
  }
}
