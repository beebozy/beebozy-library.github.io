let myLibrary = [];


function Book(title,author,pages,read) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  // the constructor...
}

function addBookToLibrary() {
  let author= document.querySelector("#author").value;
  let title= document.querySelector("#title").value;
  let pages= document.querySelector("#pages").value;
  let read= document.querySelector("#read").checked;

  let newBook = new Book(author,title,pages,read);

myLibrary.push(newBook);
  display();
  // do stuff here
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  display();
}
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  display();
}


function display(){
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let index = 0; index < myLibrary.length; index++) {
    let book = myLibrary[index];
    let bookEl = document.createElement("div");
   // bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = ` <div class="card-header">
    <h3 class="title">${book.title}</h3>
    <h5 class="author">by ${book.author}</h5>
  </div>
  <div class="card-body">
    <p>${book.pages} pages</p>
    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${index})">Toggle</button>
    </div>`
   
    libraryEl.appendChild(bookEl);

}


}
let newBookBtn= document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click",function(){
let newBookForm=document.querySelector("#new-book-form");
newBookForm.style.display="block";

})

document.querySelector("#new-book-form").addEventListener("submit",function(event){
  event.preventDefault();
  addBookToLibrary();
})