module.exports = {
    logger: {
        info: (msg) => {console.log("Information: ",msg)},
        error: (msg) => {console.log("Error: ",msg)}
    },

    sayHi : (name) => {console.log("Hi, "+name+" from EUnice and Nodejs")},

    statement: "Hello World!",

    user: {name: "Jenny", age: 16}
}