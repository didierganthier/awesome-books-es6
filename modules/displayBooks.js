const displayBooks = (booksContainer, books) => {
  if (books.length === 0) {
    booksContainer.innerHTML = '<p class="no-books">No books added yet</p>';
    // Remove border from books container
    booksContainer.style.border = 'none';
  } else {
    booksContainer.style.border = '2px solid #000';
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      booksContainer.innerHTML += `
          <div class="book">
            <div class="data-container">
              <p class="title">${book.title}</p>
              <span>by</span>
              <p class="author">${book.author}</p>
            </div>
            <button type="button" class="remove-btn">Remove</button>
          </div>
        `;
      // Different background for odd and even books
      if (index % 2 === 0) {
        booksContainer.lastElementChild.style.backgroundColor = '#DDD';
      } else {
        booksContainer.lastElementChild.style.backgroundColor = '#fff';
      }
    });
  }
  if (books.length === 0) {
    booksContainer.innerHTML = '<p class="no-books">No books added yet</p>';
    // Remove border from books container
    booksContainer.style.border = 'none';
  } else {
    booksContainer.style.border = '2px solid #000';
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      booksContainer.innerHTML += `
          <div class="book">
            <div class="data-container">
              <p class="title">${book.title}</p>
              <span>by</span>
              <p class="author">${book.author}</p>
            </div>
            <button type="button" class="remove-btn">Remove</button>
          </div>
        `;
      // Different background for odd and even books
      if (index % 2 === 0) {
        booksContainer.lastElementChild.style.backgroundColor = '#DDD';
      } else {
        booksContainer.lastElementChild.style.backgroundColor = '#fff';
      }
    });
  }
};

export default displayBooks;