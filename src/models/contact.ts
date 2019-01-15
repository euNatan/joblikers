export class Contact {
   id: number;
   name: string;
   email: string;
   password: string;
   state: string;
   city: string;
   neighborhood: string;
   cpf: string;
   genre: string;
   phone: string;

   constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}