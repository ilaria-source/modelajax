import { Component } from '@angular/core';
import { Users } from './users.model';

import users from '../assets/user.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app5-modelajax';
  //i dati si importano nel component principale
  public usersList: Users[ ] =  users ;
      // nel momento in cui uso user.json non mi serve più
      // users : Users[] = [
      //   new Users('Max', 'Roma', '33'),
      //   new Users('Mario', 'Milano', '25'),
      //   new Users('Simona', 'Napoli', '22'),
      // ];
  //è identico a questo:
  // users = [
  //   {nome: 'Max', citta: 'Roma', eta: 33},
  //   {nome: 'Mario', citta: 'Milano', eta: 25},
  //   {nome: 'Simona', citta: 'Napoli', eta: 22}
  // ];
    //javascript
    // constructor(private http: HttpClient){
    //   this.http.get('assets/user.json')
    //   //.map(res => res.json())
    //   .subscribe((response: any) => {
    //     for (let i = 0; i < response.user.length; i++ ) //è necessario un ciclo for perchè è un array
    //     {
    //       this.users.push
    //       (
    //         {
    //           nome: response.user[i].nome,
    //           citta: response.user[i].citta,
    //           eta: response.user[i].eta
    //         }
    //       );
    //     };
    //   });
    // }
  //typescript
  //constructor(){
    // this.users.push(
    //   {nome: 'Valeria', citta: 'Taranto', eta: 55}
    // );
 // }
 getUser(user: Users)
 {
    this.usersList.push(user);
 }
}
