export interface GoodType {
    name:string;
    price:string;
    quantity:number;
    description:string;
}
export class Good implements GoodType{
    name: string;
    price: string;
    quantity: number;
    description: string;
    

    constructor(name:string,price:string,quantity:number,description:string){
        this.name = name;
        this.price = price
        this.quantity = quantity
        this.description = description
    }
}