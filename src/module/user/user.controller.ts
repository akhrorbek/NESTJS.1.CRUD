import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateDto } from '../dto/create.dto';
import { UpdateDto } from '../dto/update.dto';
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

    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch('/update/:id')
    updateUser (@Param('id', new ParseIntPipe()) id: number, @Body() body:UpdateDto): void {

        this.userService.updateUser(id, body)

    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('/delete/:id')
    deleteUser(@Param('id', new ParseIntPipe()) id:number):void {
        this.userService.deleteUser(id)
    }
}
