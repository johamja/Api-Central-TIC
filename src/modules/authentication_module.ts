import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.context';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Authentication_module {
  async SignInUser(email: string, password: string) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // console.log('CreateUser', res.user, res.providerId, res.operationType);
      return res.user;
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log('Error ', errorCode, errorMessage);
    }
  }

  async CreateUser(email: string, password: string) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log('CreateUser', res.user, res.providerId, res.operationType);
      return res.user;
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log('Error ', errorCode, errorMessage);
    }
  }
}
