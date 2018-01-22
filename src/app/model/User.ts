export class User{

    type:string="";
    name:string="";
    surname:string="";

    constructor(response:any) {
        if(!!response.type) {
            this.type = response.type;
            this.name = response.name;
            this.surname = response.surname;
        }
    }

    isAdmin(){
        return this.type=="admin";
    }

    isEmpty(){
        return this.type=="";
    }
}