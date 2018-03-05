import { Item } from '../../item/model/item';
import { Mercado } from '../../mercado/model/mercado';

export class Compra {
    public mercado : Mercado;
    public itens: Item[];
    public preco: number;
    public data: Date;
}
