export class Query {

    value: string;
    checked: boolean;

    constructor(response: any) {
        this.value = response.value;
        this.checked = response.checked;
    }
}
