const createBook = document.querySelector(".createBook");
const modal = document.querySelector("#bookModal");
const saveBtn = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookList = document.querySelector(".bookList");
let books = [];
const book = (title, author, publicationYear, genre) => {
  return {
    title: title,
    author: author,
    publicationYear: publicationYear,
    genre: genre,
    getTitle() {
      return this.title;
    },
    getAuthor() {
      return this.author;
    },
    getPublicationYear() {
      return this.getPublicationYear;
    },
    getGenre() {
      return this.genre;
    },
    getBookInfo() {
      return `Title: ${this.title}<br>Author: ${this.author}<br>Publication Year: ${this.publicationYear}<br>Genre: ${this.genre}`;
    },
  };
};
function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const newBook = book(title, author, publicationYear, genre);
  books.push(newBook);
  displayBook();
  // resetModal();
  closeModal();
}
function displayBook() {
  bookList.innerHTML = "";
  books.forEach((book) => {
    console.log(book.getBookInfo());
    const bookInfo = book.getBookInfo();
    const bookItem = document.createElement("div");
    bookItem.innerHTML = bookInfo;
    bookList.appendChild(bookItem);
    // console.log(bookInfo);
  });
}
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

saveBtn.onclick = () => {
  saveBook();
  // console.log(books);
};
