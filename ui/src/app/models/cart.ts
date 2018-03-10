import {Food} from './food';
import {Supplier} from './supplier';


export class Cart {
    id: string;
    food: Food;
    supplier: Supplier;
    total: number;

    constructor(){
        this.food = new Food;
        this.supplier = new Supplier;
    }
}
