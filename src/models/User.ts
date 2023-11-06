import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

export class User {
  private Id: string;
  private Nombre: string;
  private TipoUsuario: string;
  private Token: string;

  constructor(Id: string, Nombre: string, TipoUsuario: string, Token: string) {
    this.Id = Id;
    this.Nombre = Nombre;
    this.TipoUsuario = TipoUsuario;
    this.Token = Token;
  }

  static FillDocumentData(
    doc: QueryDocumentSnapshot<DocumentData, DocumentData>,
  ) {
    const temp = new User('', '', '', '');
    temp.Id = doc.id;
    temp.Nombre = doc.data().Nombre;
    temp.TipoUsuario = doc.data().TipoUsuario;
    temp.Token = doc.data().Token;
    return temp;
  }
}
