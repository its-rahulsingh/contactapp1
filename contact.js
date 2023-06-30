class Contact{
    constructor(cName){
        this.cName= cName
        this.contactInfos = []
    }

    static createContact(cName){
        //check
        return new Contact(cName)
    }

    findType(type){
        for (let index = 0; index < this.contactInfos.length; index++) {
            if (this.contactInfos[i]==type){
                return [true, index]
            }
        }
        return [false, -1]
    }

    createContactInfo(type, value){
        let [doesTypeExist, indexOfType] = this.findType(type)
        if (doesTypeExist){
            throw new Error ("Type already exist")
        }
        const newContactInfo = ContactInfo.createContactInfo(type, value)
        this.contactInfos.push(newContactInfo)
        return newContactInfo
    }

    readContactInfo(){
        return this.contactInfos
    }

    updateContactInfos(type, newValue){
        let [doesTypeExist, indexOfType] = this.findType(type)
        if (!doesTypeExist){
            throw new Error ("Type does not exist")
        }
        this.contactInfos[indexOfType].value = newValue
    }

    deleteContactInfo(type){
        let [doesTypeExist, indexOfType] = this.findType(type)
        if (!doesTypeExist){
            throw new Error ("Type does not exist")
        }
        this.contactInfos.splice(indexOfType, 1)
    }
}