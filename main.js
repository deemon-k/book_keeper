let popupPlace = document.querySelector('#pop-up')
let createBookButton = document.querySelector('#open-popup-button')
let bookListPlace = document.querySelector('#list')
let booksArr = []
// let book = {
//     title: '',
//     author: '',
//     friend: '',
//     until: ''
// }

// let bookTitle = document.querySelector('#title').value
// let bookAuthor = document.querySelector('#author').value
// let bookFriend = document.querySelector('#friend').value
// let bookUntil = document.querySelector('#until').value

let bookId = booksArr.length + 1

let cancelPopup = function () {
    popupPlace.removeChild(document.querySelector('.backdrop'))
}

let createBook = function (title, author, friend, until) {
    let book = {
        title: title,
        author: author,
        friend: friend,
        until: until
    }
    booksArr.push(book)
}

let addBook = function () {


    let div = document.createElement('div')
    div.setAttribute('class', 'container')
    div.innerHTML = `
    <div class="book-id">
        <p>${bookId}</p>
    </div>
    <div class="book-info">
    <div class="title">
        <p>${book.title}</p>
    </div>
    <div class="author">
        <p><span>From </span>${book.author}</p>
    </div>
    </div>
    <div class="book-lent-info">
        <div id="edit-button" class="edit-button-container"><button class="edit-button" onclick="editBook()"><i class="fas fa-ellipsis-v"></i></button></div>
    <div class="lent">
        <p>${book.friend}</p>
    </div>
    <div class="until">
        <p>${book.until}</p>
    </div>
    `

    bookListPlace.appendChild(div)
    cancelPopup()
}

let createPopup = function () {
    let div = document.createElement('div')
    div.setAttribute('class', 'backdrop')
    div.innerHTML = `
    <form id="pop-up" class="pop-up">
        <div class="popup-header"><h2>Lending a book away</h2></div>
        <div class="popup-main">
            <div class="title-lent">
                <div class="input">
                    <input type="text" required id="title" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Title of the book:</label>
                </div>
                <div class="input">
                    <input type="text" required id="friend" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Lent to a friend:</label>
                </div>
            </div>
            <div class="author-until">
                <div class="input">
                    <input type="text" required id="author" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Author:</label>
                </div>
                <div class="input">
                    <input type="date" required id="until" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label"></label>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <div class="popup-buttons">
                <button id="cancel-popup-button" class="cancel-popup-button" type="button">Cancel</button>
                <button id="submit-popup-button" class="submit-popup-button" type="button">Save</button>
            </div>
        </div>
    </form>
    `
    popupPlace.appendChild(div)

    document.querySelector('#cancel-popup-button').addEventListener('click', cancelPopup)
    document.querySelector('#submit-popup-button').addEventListener('click', addBook)
}

let editPopup = function () {
    let div = document.createElement('div')
    div.setAttribute('class', 'backdrop')
    div.innerHTML = `
     <form id="edit-pop-up" class="pop-up">
        <div class="popup-header"><h2>Lending a book away</h2></div>
        <div class="popup-main">
            <div class="title-lent">
                <div class="input">
                    <input type="text" required id="title-edit" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Title of the book:</label>
                </div>
                <div class="input">
                    <input type="text" required id="friend-edit" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Lent to a friend:</label>
                </div>
            </div>
            <div class="author-until">
                <div class="input">
                    <input type="text" required id="author-edit" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Author:</label>
                </div>
                <div class="input">
                    <input type="text" required id="until-edit" class="form-input">
                    <span class="bar"></span>
                    <label class="form-label">Until:</label>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <div class="for-delete">
                <input type="checkbox" name="returned-book" value="book" id="returned-book">
                <label for="returned-book" class="returned-book">Book has been returned back</label>
            </div>
            <div class="popup-buttons">
                <button id="cancel-edit-button" class="cancel-popup-button" type="button">Cancel</button>
                <button id="submit-edit-button" class="submit-popup-button" type="button">Save</button>
            </div>
        </div>
    </form>
    `
    popupPlace.appendChild(div)

    let cancelEditButton = document.querySelector('#cancel-edit-button')
    cancelEditButton.addEventListener('click', cancelPopup)
}

createBookButton.addEventListener('click', createPopup)
