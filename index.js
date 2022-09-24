import { DateTime } from './modules/luxon.js';
import Book from './modules/books.js';
import displayBooks from './modules/displayBooks.js';
import setDateToHTML from './modules/getDate.js';

const titleInput = document.querySelector('.title-value');
const authorInput = document.querySelector('.author-value');
const dateSpan = document.querySelector('.date');
const listBookElement = document.querySelector('#list-book');
const booksSection = document.querySelector('.books');
const creaateBookSection = document.querySelector('.create-book');
const contactSection = document.querySelector('.contact');

listBookElement.addEventListener('click', () => {
  booksSection.style.display = 'flex';
  contactSection.style.display = 'none';

  const books = JSON.parse(localStorage.getItem('books')) || [];
  const booksContainer = booksSection;
  displayBooks(booksContainer, books);
  // Hide the add book form
  creaateBookSection.style.display = 'none';
});

const addBookElement = document.querySelector('#add-new');
addBookElement.addEventListener('click', () => {
  creaateBookSection.style.display = 'flex';
  booksSection.style.display = 'none';
  contactSection.style.display = 'none';
});

const addBook = () => {
  const book = new Book(titleInput.value, authorInput.value);
  book.addBook();
  titleInput.value = '';
  authorInput.value = '';
};

const removeBook = (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const book = e.target.parentElement;
    const bookToRemove = new Book(book.querySelector('.title').textContent);
    bookToRemove.removeBook();
    book.remove();
    if (booksSection.children.length === 0) {
      booksSection.style.border = 'none';
      booksSection.innerHTML = '<p class="no-books">No books added yet</p>';
    }
  }
};

document.querySelector('.add-books').addEventListener('click', addBook);
booksSection.addEventListener('click', removeBook);

const contactElement = document.querySelector('#contact');
contactElement.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  creaateBookSection.style.display = 'none';
  booksSection.style.display = 'none';
});

window.onload = () => {
  booksSection.style.display = 'flex';
  contactSection.style.display = 'none';
  creaateBookSection.style.display = 'none';

  setDateToHTML(dateSpan, DateTime);

  document.querySelectorAll('a')[0].focus();
  document.querySelectorAll('a')[0].style.outline = 'none';

  const books = JSON.parse(localStorage.getItem('books')) || [];
  const booksContainer = booksSection;
  displayBooks(booksContainer, books);
};