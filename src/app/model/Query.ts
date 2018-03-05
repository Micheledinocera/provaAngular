export class Query {

    value: string;
    checked: boolean;

    constructor(response: any) {
        this.value = response.value;
        this.checked = response.checked ? response.checked : false;
    }

    static getDummyQueries() {
      return  [
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
      ];
    }

    static getDummyQueriesUnchecked() {
      return  [
        new Query({ value: 'title' }),
        new Query({value: 'rating'}),
        new Query({value: 'price'}),
        new Query({value: 'description'})
      ];
    }
}
