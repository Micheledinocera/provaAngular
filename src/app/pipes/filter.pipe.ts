import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
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
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it.value.toLowerCase().includes(searchText);
        });
    }
}

@Pipe({
    name: 'onlyChecked',
    pure:false
})
export class OnlyCheckedPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if(!items) return [];
        return items.filter( it => {
            return it.checked;
        });
    }
}

@Pipe({
    name: 'filterOnWord'
})
export class FilterOnWordPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
            return it.word.toLowerCase().includes(searchText);
        });
    }
}