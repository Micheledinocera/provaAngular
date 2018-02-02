import { TreeviewItem } from 'ngx-treeview';

export class Category {

  categories: TreeviewItem[];

  constructor(data: any) {
    for (const category of data)
      this.categories.push(new TreeviewItem(category));
  }
}
