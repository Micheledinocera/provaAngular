import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it.toLowerCase().includes(searchText);
        });
    }
}

@Pipe({
    name: 'filterOnValue'
})
export class FilterOnValuePipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it.value.toLowerCase().includes(searchText);
        });
    }
}

@Pipe({
    name: 'onlyChecked',
    pure: false
})
export class OnlyCheckedPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if (!items) return [];
        return items.filter( it => {
            return it.checked;
        });
    }
}

@Pipe({
    name: 'onlyMain',
    pure: false
})
export class OnlyMainPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if (!items) return [];
        return items.filter( it => {
            return it.isMain;
        });
    }
}

@Pipe({
  name: 'onlyCompleted',
  pure: false
})
export class OnlyCompletedPipe implements PipeTransform {
  transform(items: any[]): any[] {
      if (!items) return [];
      return items.filter( it => {
          return it.completed;
      });
  }
}

@Pipe({
  name: 'onlyIncompleted',
  pure: false
})
export class OnlyIncompletedPipe implements PipeTransform {
  transform(items: any[]): any[] {
      if (!items) return [];
      return items.filter( it => {
          return !it.completed;
      });
  }
}

@Pipe({
    name: 'filterOnWord'
})
export class FilterOnWordPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it.word.toLowerCase().includes(searchText);
        });
    }
}

@Pipe({
  name: 'onlyKeys',
  pure: false
})
export class FilterOnlyKeys implements PipeTransform {
  transform(items: {}, searchText: string): any[] {
      if (!items) return [];
      return Object.keys(items);
  }
}
