export class Facet {

    value: string;
    checked: boolean;
    type: string;

    constructor(response: any) {
        this.value = response.value;
        this.checked = response.checked;
        this.type = response.isMain;
    }
}
