import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from '../dto/create.dto';
import { UpdateDto } from '../dto/update.dto';

@Injectable()
export class UserService {
    private readonly userList: any []
    constructor() {
        this.userList = []
    }

    getUser() {
        return this.userList
    }

    createUser(body: any) {
        if(!body) {
            throw new NotFoundException()
        }
        body.id = this.userList.at(-1)?.id +1 || 1
        this.userList.push(body)
    }

    updateUser (id: number , body: UpdateDto): void {
        const user = this.userList.find(e => e.id == id)
        const findIndex = this.userList.findIndex(e => e.id == id)
        if(!user) {
            throw new NotFoundException()
        }

        user.userName = body.userName ? body.userName : user.userName
        user.userAge = body.userAge ? body.userAge : user.userAge

        this.userList.splice(findIndex, 1)
        this.userList.push(user)
    }


    deleteUser(id:number):void {
        const findIndex = this.userList.findIndex(e => e.id == id)

        if(findIndex < 0 ) {
            throw new NotFoundException()
        }

        this.userList.splice(findIndex, 1)
    }



}
