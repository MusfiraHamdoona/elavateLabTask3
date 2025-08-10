README for Books API:

OVERVIEW:
This is a simple REST API built with Node.js and Express.js to manage a list of books.
It supports basic CRUD operations: Create, Read, Update, and Delete books stored in an in-memory array.

FEATURES:

Get all books

Get a single book by ID

Add a new book

Update book details

Delete a book

PREREQUISITES:

Node.js (v12+ recommended)

npm (Node Package Manager)

INSTALLATION:

Clone or download the repository.

Open a terminal and navigate to the project folder.

Run the following to install dependencies:

npm install
Running the API
Start the server with:

npm start
The API will be available at:
http://localhost:3000

API ENDPOINTS:

GET	/books	- Get all books	—
GET	/books/:id	- Get book by ID	—
POST	/books	-Add a new book-	{ "title": "Book Name", "author": "Author Name" }
PUT	/books/:id	-Update a book-	{ "title": "Updated Title", "author": "Updated Author" }
DELETE	/books/:id	-Delete a book	—
POST and PUT requests require a JSON body with title and author fields.
