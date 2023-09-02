const addBook = document.querySelector(".create-book-btn");
const saveBook = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookModal = document.querySelector("#bookModal");
const bookList = document.querySelector(".bookList");
const removeBtn = document.querySelector(".removeBtn");
const books = [];

function displayModal() {
  bookModal.style.display = "block";
}
addBook.onclick = () => {
  displayModal();
};
function closeBookModal() {
  bookModal.style.display = "none";
}
closeBtn.onclick = () => {
  closeBookModal();
};
saveBook.onclick = () => {
  createBook();
};

window.addEventListener("click", (event) => {
  if (event.target === bookModal) {
    closeBookModal();
  }
});
class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publicationYear;
    this.genre = genre;
  }
  getTitle() {
    return title;
  }
  getAuthor() {
    return author;
  }
  getPublisher() {
    return publisher;
  }
  getGenre() {
    return genre;
  }
  getBookInfo() {
    return `Title: ${this.title}<br> Author: ${this.author}<br>Publisher: ${this.publisher}<br>Genre: ${this.genre}<br>`;
  }
}

function createBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const book = new Book(title, author, publicationYear, genre);
  books.push(book);
  displayBooks();
  resetModal();
}
function displayBooks() {
  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookInfo = book.getBookInfo();
    const bookItem = document.createElement("div");
    const removeBtn = document.createElement("button");
    const readBtn = document.createElement("button");
    const btnContainer = document.createElement("div");
    btnContainer.classList = "btn-container";
    readBtn.innerHTML = "Not Read";
    readBtn.classList = "read-book-btn";
    readBtn.style.backgroundColor = "red";
    removeBtn.innerHTML = "Remove";
    removeBtn.classList = "removeBtn";
    bookItem.classList = "bookItem";
    bookItem.innerHTML = bookInfo;
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(removeBtn);
    bookItem.appendChild(btnContainer);
    bookList.appendChild(bookItem);
    removeBtn.onclick = (index) => {
      books.splice(index, 1);
      displayBooks();
    };
    readBtn.onclick = () => {
      if (readBtn.style.backgroundColor === "red") {
        readBtn.style.backgroundColor = "green";
        readBtn.innerHTML = "Read Book";
        bookItem.style.backgroundColor = "#e2f2f3";
      } else if (readBtn.style.backgroundColor === "green") {
        readBtn.style.backgroundColor = "red";
        bookItem.style.backgroundColor = "#D3CFCF";
        readBtn.innerHTML = "Not Read";
      }
    };
    closeBookModal();
  });
}

function resetModal() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("publicationYear").value = "";
  document.getElementById("genre").value = "";
}
