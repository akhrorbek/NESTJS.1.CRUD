import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
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

    @HttpCode(HttpStatus.CREATED)
    @Post('create')
    createUser(@Body() body:CreateDto): void {
       this.userService.createUser(body)
    }
}
