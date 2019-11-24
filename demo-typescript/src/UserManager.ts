import {IUser} from "./IUser";

class UserManager {
    public users: IUser[] = [];

    constructor() {
    };

    add(user: IUser) {
        this.users.push(user)
    }

    getList(): IUser[] {
        return this.users;
    }

    showItem():void {
        for (let index in this.users){
            console.log(this.users[index])
        }
    }
}

let user1: IUser =
    {
        name: 'minh',
        age: 18
    };
let user2: IUser =
    {
        name: 'mi',
        age: 18
    };
let userManager = new UserManager();
userManager.add(user1);
userManager.add(user2);
console.log(userManager.showItem());