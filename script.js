const newBookBtn = document.querySelector(".new-book-btn")
const newBookForm = document.querySelector(".new-book-form")
const library = document.querySelector(".library")
const myLibrary = []

newBookBtn.addEventListener("click", e => {
    newBookForm.classList.toggle("show")
})

newBookForm.addEventListener("submit", e => {
    e.preventDefault()
    addBookToLibrary()
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked
    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    displayBook()
}

function displayBook() {
    library.innerHTML = ""
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookItem = document.createElement("div")
        bookItem.setAttribute("class", "book-item")
        bookItem.innerHTML = `
        <div class ="book-header">
            <h3 class="title">Book title:${book.title}</h3>
            <h5 class="author">Book author:${book.author}</h5>
            <p>Pages:${book.pages}</p><br>
            <p>${book.read.checked ? "Read" : "Not read yet"}</p><br>
            <button class="rmv-btn">Remove book</button>
        </div>`
        library.appendChild(bookItem)
    }
}



