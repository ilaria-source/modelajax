//si crea un file ts chiamato nomeClasse.model.ts
export class Users {
  constructor(
    public nome: string,
    public citta: string,
    public eta: number,
    ){}
}

//è identico a questo ma non usarlo perchè è BRUTTO:
    // export class User
    // {
    //   public nome: string;
    //   public citta: string;
    //   public eta: string;
    // }
