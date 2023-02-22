import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from '../dto/create.dto';

@Injectable()
export class UserService {
    private readonly userService: any []
    constructor() {
        this.userService = []
    }

    getUser() {
        return this.userService
    }

    createUser(body:CreateDto) {


        if(!body) {
            throw new NotFoundException()
        }

        this.userService.push(body)
    }


}
