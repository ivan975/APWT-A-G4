import {Controller} from '@nestjs/common'
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { CreateUserDTO } from './dto';

let USERS = [];


@Controller('/users')
export class UsersController {

    @Post()
    addUser(@Body() createUserDTO: CreateUserDTO){
        USERS.push(createUserDTO);
        return 'User added';
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return USERS.find(user => user.id === +id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number,@Body() updateUserDTO: CreateUserDTO){
        const userIdx = USERS.findIndex(user => user.id === +id);
        if(!userIdx){
            return;
        }
        USERS[userIdx] = updateUserDTO;
        return { message: "User updated" };
        
    }

    @Delete(":id")
  deleteUser(@Param("id") id: number) {
    USERS = USERS.filter((user) => user.id !== +id);

    return { message: "User deleted" };
  }
}

