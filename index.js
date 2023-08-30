const createBook = document.querySelector(".createBook");
const modal = document.querySelector("#bookModal");
const saveBtn = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookList = document.querySelector(".bookList");
let books = [];

createBook.onclick = () => {
  openModal();
};
closeBtn.onclick = () => {
  closeModal();
};

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
  getTile() {
    return title;
  }
  getAuthor() {
    return author;
  }
  getPublicationYear() {
    return publicationYear;
  }
  getGenre() {
    return genre;
  }
  getBookInfo() {
    return `Title:${this.title}<br>Author:${this.author}<br> Publication Year:${this.publicationYear}<br> Genre:${this.genre}`;
  }
}

saveBtn.onclick = () => {
  saveBook();
  // console.log(books);
};

function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const book = new Book(title, author, publicationYear, genre);
  books.push(book);
  displayBooks();

  closeModal();
}
function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
}
function displayBooks() {
  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookInfo = book.getBookInfo();
    const bookItem = document.createElement("div");
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("remove-btn");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = bookInfo;
    bookList.appendChild(bookItem);
    bookList.appendChild(removeBtn);
    removeBtn.onclick = (e) => {
      e.target.splice(index, 1);
      displayBook();
    };
  });
}
