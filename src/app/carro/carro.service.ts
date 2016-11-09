import { Carro } from './carro';
import { Acessorio } from './acessorio';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable()
export class CarroService {

    private _url: string = 'https://aluracar.herokuapp.com';

    // private _carros: Carro[];

    private _acessorios: Acessorio[];

    constructor(private _http: Http) {

        /*
        this._carros = [

            new Carro('BMW 120', 100),
            new Carro('ONIX 1.6', 200),
            new Carro('Fiesta 2.0', 300),
            new Carro('C3 1.0', 400),   
            new Carro('Uno Fire', 500),
            new Carro('Sentra 2.0', 600),
            new Carro('Astra Sedan', 700),
            new Carro('Vectra 2.0 Turbo', 800),
            new Carro('Hilux 4x4', 900)
        ];
        */
        this._acessorios = [
            new Acessorio('Freio ABS', 800),
            new Acessorio('Ar-condicionado',1000),
            new Acessorio('MP3 Player', 500)
        ];
    }

    lista(): Observable<Carro[]> {

         return this._http
            .get(this._url)
            .map(res => res.json());
    }

    obterAcessorios(): Acessorio[] {
        
        return this._acessorios;
    }
}