class Microsoft extends Facebook {
    constructor(name) {
        this.name = name;
    }
    // getter
    get name() {
        return this.name;
    }
    // setter
    set name(newName) {
        this.name = newName;
    }
}


module.exports = {
    Microsoft,
    Facebook
}