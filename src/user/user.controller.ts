import { Body, Controller, Get, Param, Post ,Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './models/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {


    constructor(private userService:UserService){}

   @Post()
    create(@Body() user:User):Observable<User>{
       return  this.userService.create(user);
   }

   @Get(':id')
   async findOne(@Param() params):Promise<User>{
       return await this.userService.findOne(params);
   }

   @Get()
   async findAll():Promise<User[]>{
       return await this.userService.findAll();
   }

    @Delete(':id')
   async deleteOne(@Param() id:string):Promise<any>{
        return await this.userService.deleteOne(id);
    }

    @Put(":id")
    async updateOne(@Param() id:string,@Body() user:User):Promise<User>{
        return await this.userService.updateOne(id,user)
    }
}
