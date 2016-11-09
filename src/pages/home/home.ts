import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carro } from '../../app/carro/carro';
import { CarroService } from '../../app/carro/carro.service';
import { CarroEscolhido } from '../carro-escolhido/carro-escolhido.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private carros: Carro[];

  constructor(private _navCtrl: NavController, private _service: CarroService) {
    
    this._service
      .lista()
      .subscribe(carros => this.carros = carros);
  }

  exibe(event, carro: Carro) {
    
      this._navCtrl.push(CarroEscolhido, {
        carro: carro
      });
  }
}
