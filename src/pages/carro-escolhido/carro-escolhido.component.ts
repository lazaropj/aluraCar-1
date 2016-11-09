import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Carro } from '../../app/carro/carro';
import { Acessorio } from '../../app/carro/acessorio';
import { CarroService } from '../../app/carro/carro.service';
import { FinalizaPedido } from '../finaliza-pedido/finaliza-pedido.component';

@Component({
    templateUrl: 'carro-escolhido.component.html'
})
export class CarroEscolhido { 

    private carro: Carro;

    private precoTotal: number;

    private acessorios: Acessorio[];

    constructor(params: NavParams, private _service: CarroService, private _navCtrl: NavController) {

       this.carro  = params.get('carro');
       this.precoTotal = this.carro.preco;
       this.acessorios = this._service.obterAcessorios();
    }

    atualizaTotal(ligado, acessorio): void {
    
        ligado ?
            this.precoTotal+= acessorio.preco :
            this.precoTotal-= acessorio.preco;
    }

    finalizaPedido(): void {

        this._navCtrl.push(FinalizaPedido, {
            carro: this.carro, 
            precoTotal: this.precoTotal
        });
    }
}