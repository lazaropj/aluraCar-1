import { Carro } from './carro';

export class Pedido {

    constructor(public carro: Carro, public valor: number, public nome: string, public endereco: string, public email) {}   
}