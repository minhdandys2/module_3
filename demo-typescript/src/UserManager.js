"use strict";
exports.__esModule = true;
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    ;
    UserManager.prototype.add = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.getList = function () {
        return this.users;
    };
    UserManager.prototype.showItem = function () {
        for (var index in this.users) {
            console.log(this.users[index]);
        }
    };
    return UserManager;
}());
var user1 = {
    name: 'minh',
    age: 18
};
var user2 = {
    name: 'mi',
    age: 18
};
var userManager = new UserManager();
userManager.add(user1);
userManager.add(user2);
console.log(userManager.showItem());
