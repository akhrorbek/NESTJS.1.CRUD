import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly userService: any []
    constructor() {
        this.userService = []
    }

    getUser() {
        return this.userService
    }


}
