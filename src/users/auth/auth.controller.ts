import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post()
    userLogin(@Body() userLogin: AuthDto): string {
        console.log(userLogin);
        return 'Bienvenido';
        //return this.appService.getHello();
    }
}
