const addBook = document.querySelector(".createBook");
const saveBook = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookModal = document.querySelector("#bookModal");
const books = [];

function displayBlock() {
  bookModal.style.display = "block";
}
addBook.onclick = () => {
  displayBlock();
};

closeBtn.onclick = () => {
  bookModal.style.display = "none";
};

function createBook() {}
class Book {
  constructor(title, author, publisher, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.genre = genre;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getPublisher() {
    return this.publisher;
  }
  getGenre() {
    return this.genre;
  }
  getBookInf() {
    return `Title:${this.title}<br> Author:${this.author}<br>Publisher:${this.publisher}<br>${this.publisher}<br>Genre:${this.genre}`;
  }
}
