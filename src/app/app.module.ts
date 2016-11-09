import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarroEscolhido } from '../pages/carro-escolhido/carro-escolhido.component';
import { CarroService }  from './carro/carro.service';
import { FinalizaPedido } from '../pages/finaliza-pedido/finaliza-pedido.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarroEscolhido, 
    FinalizaPedido
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    CarroEscolhido, 
    FinalizaPedido
  ],
  providers: [ CarroService ]
})
export class AppModule {}
