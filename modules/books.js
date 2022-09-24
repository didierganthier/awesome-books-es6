export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBook = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const filteredBooks = books.filter((book) => book.title !== this.title);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
  }
}