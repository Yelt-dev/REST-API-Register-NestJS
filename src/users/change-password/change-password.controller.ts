import { Body, Controller, Param, Put } from '@nestjs/common';
import { ChangePassowrdDto } from './dto/change-password.dto';

@Controller('change-password')
export class ChangePasswordController {

    @Put(':id')
    changePassword(@Body() pwsUser: ChangePassowrdDto, @Param('id') id): string {
        console.log(pwsUser, id);
        return 'Contraseña cambiada';
        //return this.appService.getHello();
    }
}
