import { Injectable } from '@nestjs/common';
import { User } from '../models/User';
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../Firebase/firebase.context';

@Injectable()
export class UsersRepositry {
  async GetAll(): Promise<User[]> {
    const querySnapshot = await getDocs(collection(db, 'Usuarios'));
    const resultUsers: User[] = [];

    if (querySnapshot.size != 0) {
      await new Promise<void>((resolve) => {
        querySnapshot.forEach((doc) => {
          const resultProduct = User.FillDocumentData(doc);
          resultUsers.push(resultProduct);

          if (resultUsers.length == querySnapshot.size) {
            resolve();
          }
        });
      });
    }

    return resultUsers;
  }
}
