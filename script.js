const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `Book title:${this.title}, Author:${this.author}, Number of pages:${this.pages}, ${read ? "Already read" : "Not read yet"}`
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", false)

console.log(theHobbit.info())