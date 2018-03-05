export class Facet {

    value: string;
    checked: boolean;
    type: string;

    constructor(response: any) {
        this.value = response.value;
        this.checked = response.checked ? response.checked : false;
        this.type = response.type;
    }

    static getDummyFacets() {
      return [
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
      ];
    }

    static getDummyFacetsUnchecked() {
      return [
        {
            value: 'color',
            type: 'checkbox'
        }, {
            value: 'size',
            type: 'checkbox'
        }, {
            value: 'price',
            type: 'slider'
        }, {
            value: 'rating',
            type: 'radio'
        },
      ];
    }
}
