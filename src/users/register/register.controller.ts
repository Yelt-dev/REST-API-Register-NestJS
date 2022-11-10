import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private registerService: RegisterService) {}

    @Post()
    createUser(@Body() user: CreateUserDto) {
        console.log(user);
        return this.registerService.registerUser(user);
    }

}
