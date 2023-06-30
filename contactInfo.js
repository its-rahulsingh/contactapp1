class ContactInfo{
    constructor(type, value){
        this.type = type
        this.value = value
    }

    static createContactInfo(type, value){
        //check
        return new ContactInfo(type, value)
    }
}