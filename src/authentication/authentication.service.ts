import { Injectable } from '@nestjs/common';
import { Authentication_module } from '../modules/authentication_module';

const authenticationModule = new Authentication_module();

@Injectable()
export class AuthenticationService {
  SignInUser(email: string, password: string) {
    return authenticationModule.SignInUser(email, password);
  }

  CreateUser(email: string, password: string) {
    return authenticationModule.CreateUser(email, password);
  }
}
