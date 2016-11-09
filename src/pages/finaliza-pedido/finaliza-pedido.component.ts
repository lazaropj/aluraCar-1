import { Component } from '@angular/core';
import { NavParams, AlertController, NavController } from 'ionic-angular';
import { Carro } from '../../app/carro/carro';
import { Pedido } from '../../app/carro/pedido';
import { CarroService } from '../../app/carro/carro.service';
import { HomePage } from '../home/home';
@Component({
    templateUrl: 'finaliza-pedido.component.html'
})
export class FinalizaPedido {

    private carro: Carro;
    private precoTotal: number;
    private pedido: Pedido;

    constructor(params: NavParams, private _alertCtrl: AlertController, private _service: CarroService, private _navCtrl: NavController) {

       this.carro  = params.get('carro');
       this.precoTotal = params.get('precoTotal');
       this.pedido = new Pedido(this.carro, this.precoTotal, '', '', '');
    }

    finalizaPedido(): void {

        this._alertCtrl.create({
            title: 'Parabéns!',
            subTitle: 'Você acaba de comprar um carro',
            buttons: [{
                text: 'OK',
                handler: () => this._navCtrl.setRoot(HomePage)
            }],
        })
        .present()     
    }
}