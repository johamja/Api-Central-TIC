import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Request } from 'express';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get()
  GetAll(@Req() req: Request): string {
    console.log('Conexion establecida con aplicacion conductor ' + req.ip);
    return 'Funciona';
  }

  @Post()
  SignIn(/**@Res() res: Response,*/ @Req() req: Request) {
    // console.log(req.body);
    // const contraseña = req.body.User;
    // res.status(HttpStatus.OK).json({
    //   hola: 'holiss',
    //   Contraseña: contraseña,
    // });
    return this.authenticationService.SignInUser(
      req.body.email,
      req.body.password,
    );
  }

  @Post('register')
  Register(@Req() req: Request) {

    console.log('Registro usuario ', req.body )

    return this.authenticationService.CreateUser(
      req.body.email,
      req.body.password,
    );
  }
}
