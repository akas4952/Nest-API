import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { User } from './models/user.interface';

@Injectable()
export class UserService {


    constructor(
        @InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>
    ){}


    create(user:User): Observable<User>{
        return from(this.userRepository.save(user));
    }
    
    async findOne(id:number):Promise<any>{
        return await this.userRepository.findOne(id);
    }
    async findAll():Promise<any>{
        return await this.userRepository.find();
    }

    async deleteOne(id:string):Promise<any>{
        return await this.userRepository.delete(id); 
    }

    async updateOne(id:string,user:User):Promise<any>{
        return await this.userRepository.update(id,user);
    }

    
}
