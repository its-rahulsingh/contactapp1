const User = require("./user");


try {
    const admin1 = User.newAdmin("Rahul", "rahul123")
    console.log(admin1)
    const user1 = admin1.newUser("Satish","satish123")
    console.log(user1)
    const user2 = admin1.newUser("Nitish","nitish123")
    console.log(user2)
} catch (error) {
    console.log(error.message)
}