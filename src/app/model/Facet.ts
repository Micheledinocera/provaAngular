export class Facet {

    static TYPE_MULTI_CHOICE = 'multi-choice';
    static TYPE_SINGLE_CHOICE = 'single-choice';
    static TYPE_STARS = 'stars';
    static TYPE_PALETTE = 'palette';
    static TYPE_RANGE = 'range';
    static TYPES= [Facet.TYPE_MULTI_CHOICE, Facet.TYPE_SINGLE_CHOICE, Facet.TYPE_PALETTE, Facet.TYPE_RANGE, Facet.TYPE_STARS]
    value: string;
    checked: boolean;
    type: string;
    label: string;

    constructor(response: any) {
        this.value = response.value;
        this.checked = response.checked ? response.checked : false;
        this.type = response.type;
        this.label = response.label;
    }

    static getDummyFacets() {
      return [
        {
            value: 'color',
            type: Facet.TYPE_PALETTE,
            checked: 'true',
            label: 'shoes color'
        }, {
            value: 'size',
            type: Facet.TYPE_SINGLE_CHOICE,
            checked: 'true',
            label: 'size'
        }, {
            value: 'price',
            type: Facet.TYPE_RANGE,
            checked: 'true',
            label: 'special price'
        }, {
            value: 'rating',
            type: Facet.TYPE_STARS,
            checked: 'true',
            label: 'views'
        },
      ];
    }

    static getDummyFacetsUnchecked() {
      return [
        {
            value: 'color',
            type: Facet.TYPE_SINGLE_CHOICE
        }, {
            value: 'size',
            type: Facet.TYPE_SINGLE_CHOICE
        }, {
            value: 'price',
            type: Facet.TYPE_SINGLE_CHOICE
        }, {
            value: 'rating',
            type: Facet.TYPE_SINGLE_CHOICE
        },
      ];
    }
}
