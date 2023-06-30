class User{
    static allUser = []
    constructor (name, username, isAdmin){
        this.name = name
        this.username = username
        this.isAdmin = isAdmin
        this.contacts = []
    }

    static findUser(username){
        for (let i = 0; i < User.allUser.length; i++) {
            if (this.allUser[i].username == username){
                return [true, i]
            }
        }
        return [false, -1]
    }

    findContact(cName){
        for (let i = 0; i < User.contacts.length; i++) {
            if (this.contacts[i].cName == cName){
                return [true, i]
            }
        }
        return [false, -1]
    }

    newContact(contactName){
        if(this.isAdmin){
            throw new Error ("Admin not authorised to create contacts")
        }
        let [doesContactExist, indexOfUser] = this.findContact(contactName)
        if(doesContactExist){
            throw new Error ("Contact already exist")
        }
        const newContact = Contact.createContact(contactName)
        this.contacts.push(newContact)
        return newContact
    }

    readContactList(){
        if(this.isAdmin){
            throw new Error ("Admin not authorised to access contacts")
        }
        return this.contacts
    }

    updateContactList(cName, newValue){
        if(this.isAdmin){
            throw new Error ("Admin not authorised to access contacts")
        }
        let [doesContactExist, indexOfUser] = this.findContact(cName)
        if(!doesContactExist){
            throw new Error ("Contact does not exist")
        }
        let [doesContactExistAlready, indexOfUserAlready] = this.findContact(newValue)
        if(doesContactExistAlready){
            throw new Error ("Contact already exist")
        }
        this.contacts[indexOfUserAlready] = newValue
    }

    deleteContactList(cname){
        if(this.isAdmin){
            throw new Error ("Admin not authorised to access contacts")
        }
        let [doesContactExist, indexOfUser] = this.findContact(cName)
        if(!doesContactExist){
            throw new Error ("Contact does not exist")
        }
        this.contacts.splice(indexOfUser, 1)
    }

    static newAdmin(name, username){
        let [doesUserExist, indexOfUser] = User.findUser(username)
        if(doesUserExist){
            throw new Error ("Username already used")
        }

        const admin = new User(name, username, true)
        User.allUser.push(admin)
        return admin
    }

    newUser(name, username){
        if (!this.isAdmin){
            throw new Error("Unauthorised ")
        }

        let [doesUserExist, indexOfUser] = User.findUser(username)
        if(doesUserExist){
            throw new Error ("Username already used")
        }

        const user = new User(name, username, false)
        User.allUser.push(user)
        return user
    }

    getAllUser(){
        if (!this.isAdmin){
            throw new Error("Unauthorised ")
        }
        return User.allUser
    }

    updateUser(username, parameter, newValue){
        if (!this.isAdmin){
            throw new Error("Unauthorised ")
        }
        let [doesUserExist, indexOfUser] = User.findUser(username)
        if(!doesUserExist){
            throw new Error ("Username does not exist")
        }
        switch (parameter) {
            case "name": allUser[indexOfUser].updateName(newValue)
                
                break;
            case "username": allUser[indexOfUser].updateUsername(newValue)
                
            break;
        
            default:
                throw new Error ("Invalid Parameter")
                break;
        }
    }

    updateName(newName){
        this.name = newName
    }

    updateUsername(newUsername){
        let [doesUserExist, indexOfUser] = User.findUser(username)
        if(!doesUserExist){
            throw new Error ("Username already used")
        }
        this.username = newUsername
    }

    deleteUser(username){
        if (!this.isAdmin){
            throw new Error("Unauthorised ")
        }
        let [doesUserExist, indexOfUser] = User.findUser(username)
        if(!doesUserExist){
            throw new Error ("Username does not exist")
        }
        User.allUser.splice(indexOfUser, 1)
    }
}





module.exports = User