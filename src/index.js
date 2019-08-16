alert("Hello, World! With love from webpack!");
let template = require("./users.pug");
let locals = {
  users: [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5"
  ]
};
document.querySelector(".elf").innerHTML = template(locals);