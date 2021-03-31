## Bookstore ##

**Bookstore** is a simple web application which includes and Express RESTful API server

Commands to setup,
 ```
    npm install
    node app.js
    
 ```
 
Server will start running at port 3000.

To get all the books deatils,
- hit GET http://localhost:3000/books

To get specific book details,
- hit GET http://localhost:3000/book/<_id>

To add a book,
- hit POST http://localhost:3000/book
- POST body,
    ```
      {
        "author":"Surya Prakash Pandey",
        "title":"REST APIs to Create BookStore",
        "isbn": "978-3-16-148410-0",
      }
    ```
  
 To Update a book,
  - hit PUT http://localhost:3000/book/<_id>
  - PUT body,
    ```
      {
        "author":"Updated Name",
        "title":"REST APIs to Create BookStore",
        "isbn": "978-3-16-148410-0",
      }
    ```
  To delete a Book,
   - hit DELETE http://localhost:3000/book/<_id>
