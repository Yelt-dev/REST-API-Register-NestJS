import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './register.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class RegisterService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){
    }

    registerUser = (user:CreateUserDto) => {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
}
