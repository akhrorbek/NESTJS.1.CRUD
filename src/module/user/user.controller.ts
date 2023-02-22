import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDto } from '../dto/create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService: UserService
    )
    {}
    @Get()
    getUser (): any {
        return this.userService.getUser()
    }

    @Post('create')
    createUser(@Body() body:CreateDto): void {
       this.userService.createUser(body)
    }
}
