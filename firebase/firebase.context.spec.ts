import { auth, db } from './firebase.context';

describe('firebase', () => {
  describe('Conexion con la base de datos', () => {
    it('Cloud Firestore', async () => {
      expect(db);
    });
  });

  describe('Conexión con el autenticador', () => {
    it('firebase Authentication', async () => {
      expect(auth);
    });
  });
});
