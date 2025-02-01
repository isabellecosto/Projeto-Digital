import { Model } from "../model";

export class Product extends Model{
    productName!: string;
    productDescription!: string;
    productImage!: string;
    productCategory!: string;
    productPrice!: string;
    productOlderPrice!: string;
    productQuantity!: string;
    promotion!: boolean;
    emAlta!: boolean;
    
    constructor(){
        super();
    }
}