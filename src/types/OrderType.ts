import { Good } from "./GoodType";

export interface OrderType{
    orderDate:string;
    customer?:string;
    status:string;
    goods:Array<Good>
}
export class Order implements OrderType {
    orderDate: string;
    customer?: string | undefined;
    status:string;
    goods: Good[];
    constructor(orderDate:string,customer:string,status:string,goods:Array<Good>){
        this.orderDate = orderDate;
        this.customer = customer;
        this.goods = goods;
        this.status= status;
    }

}



