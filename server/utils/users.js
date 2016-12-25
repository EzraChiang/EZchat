[{
  id: '123',
  name: 'Ezra',
  room: 'Chat'
}]

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
}

module.exports = {Users};

//
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} years old.`;
//   }
//
// }
//
// var me = new Person('Ezra', 23);
// var description = me.getUserDescription();
// console.log(me.name);
// console.log(description);