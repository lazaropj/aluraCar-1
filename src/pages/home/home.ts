import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Carro } from '../../app/carro/carro';
import { CarroService } from '../../app/carro/carro.service';
import { CarroEscolhido } from '../carro-escolhido/carro-escolhido.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private carros: Carro[];

  constructor(private _navCtrl: NavController, service: CarroService, loadingCtrl: LoadingController) {
    
    let loader = loadingCtrl.create({
      content: "Buscando novos carros. Aguarde ...",
    });
    loader.present();

    service
      .lista()
      .subscribe(carros => {
        this.carros = carros;
        loader.dismiss();
      });
  }

  exibe(event, carro: Carro) {
    
      this._navCtrl.push(CarroEscolhido, {
        carro: carro
      });
  }
}
