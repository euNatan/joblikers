import { Injectable } from '@angular/core';


@Injectable()
export class ListaProvider {

  // Sending a GET request to /listas
  public getListas(){
    let lists = [
      {id:1, name:"Natan", lastname: "Ferreira", address: "SP, São Paulo, Tatuapé", categoria: "Programador"},
      {id:2, name:"Daniel", lastname: "Ferreira", address: "SP, São Paulo, Carrão", categoria: "Churrasqueiro"},
    ]
    return lists;
  }

  // Sending a GET request to /lista/:id
  public getLista(productId: number) {
  }

  public getCategorias(){
    let cats = [
      {id:1, name:"Montador(a) de móveis"},
      {id:2, name:"Churrasqueiro(a)"},
      {id:2, name:"Cuidador(a) de cães"},
      {id:2, name:"Eletricista"},
      {id:2, name:"Pedreiro"},
      {id:2, name:"Manutenção de Computadores"},
      {id:2, name:"Monitor(a) de Crianças"},
      {id:2, name:"Garçon"},
      {id:2, name:"Ajudante de obras"},
      {id:2, name:"Manicure"},
      {id:2, name:"Pedicure"},
      {id:2, name:"Maquiador(a)"},
      {id:2, name:"Carona"}
    ]
    return cats;
  }


}

/*export class Lista {
   id: number;
   name: string;
   lastname: string;
   address: string;
}*/
