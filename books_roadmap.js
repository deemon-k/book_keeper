const books = [];

// const book = {
//   author: 'sdfsdfsd',
//   title: 'sdsdfsdf',
//   ...
// }

function addBook(book) {
  books.push(book);
  renderList();
}

function editBook(bookIndex, editedBook) {
  books[bookIndex] = editedBook;
  renderList();
}

const popupPlaceholder = documnet.getElementById('popup-placeholder');
const form = document.getElementById('editForm');
const list = documnet.getElementById('booksList');

function getFormValue(form) {
  const formValueObj;
  //
  return formValueObj;
}

function closePopup() {
  popupPlaceholder.innerHtml = '';
}

function openEditBookPopup(bookIndex) {
  const book = books[bookIndex];
  const backdrop = document.createElement('div');
  const form = document.createElement('form');
  const authorInput = document.createElement('input');
  authorInput.value = book.author;
  const saveButton = document.createElement('button');
  saveButton.innerText = 'save';
  const cancelButton = document.createElement('button');
  cancelButton.innerHtml = 'cancel';

  saveButton.addEventListener('click', () => {
    const formValue = getFormValue(form);
    editBook(bookIndex, formValue);
    closePopup();
  });

  cancelButton.addEventListener('click', () => {
    removePopup();
  });

  form.appendChild(authorInput);
  form.appendChild(saveButton);
  form.appendChild(cancelButton);
  backdrop.appendChild(form);
  popupPlaceholder.appendChild(backdrop);
}

function createBookElement(bookIndex) {
  const elem = document.createElement('div');
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';

  editButton.addEventListener('click', () => {
    openEditBookPopup(bookIndex);
  });

  elem.appendChild(editButton);

  return elem;
}

function renderList() {
  list.innerHtml = '';
  books.forEach((_, index) => {
    const bookElem = createBookElement(index);
    list.appendChild(bookElem);
  })
}

