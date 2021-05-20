import { Component } from '@angular/core';
import { Users } from './users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app5-modelajax';
  //i dati si importano nel component principale
  users : Users[] = [
    new Users('Max', 'Roma', 33),
    new Users('Mario', 'Milano', 25),
    new Users('Simona', 'Napoli', 22),
  ];
  //è identico a questo:
  // users = [
  //   {nome: 'Max', citta: 'Roma', eta: 33},
  //   {nome: 'Mario', citta: 'Milano', eta: 25},
  //   {nome: 'Simona', citta: 'Napoli', eta: 22}
  // ];
  constructor(){
    this.users.push(
      {nome: 'Valeria', citta: 'Taranto', eta: 55}
    );
  }
}
