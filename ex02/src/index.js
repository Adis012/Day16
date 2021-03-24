class Book {
    constructor(TheLittlePrince) {
        this.TheLittlePrince = TheLittlePrince;
    }
    // getter
    get TheLittlePrince() {
        return this.TheLittlePrince;
    }
    // setter
    set TheLittlePrince(newName) {
        this.TheLittlePrince = newName;
    }

}
const TheLittlePrince = new Book("The Little Prince");
console.log(TheLittlePrince.title);
TheLittlePrince.title = "Le Petit Prince";
console.log(TheLittlePrince.title);

module. exports = Book;