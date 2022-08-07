import "../css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {getAll, update} from "../utils/BooksAPI";
import BookShelves from "./BookShelves";
import Search from "./Search";

function App() {

  const [allBooks, setAllBooks] = useState([]);


  const shelves = [
		{id: "currentlyReading", name: "Currently Reading"},
		{id: "wantToRead", name: "Want to Read"},
		{id: "read", name: "Read"},
		{id: "none", name: "None"}
	];


  const updateShelf = (book, currentShelf) => {

    if (allBooks.includes(book)) {
      const updatedBooks = allBooks.map((currentBook) => {
        if (currentBook.id === book.id) {
          currentBook.shelf = currentShelf;
        }
        return currentBook;
      });
      setAllBooks(updatedBooks);

    } else {
      let searchBook = [];
      book.shelf = currentShelf;
      searchBook = book;
      setAllBooks(allBooks.concat(searchBook));
    }

    update(book, currentShelf);
  };


  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll();
      setAllBooks(res);
    };

    getAllBooks();
  }, []);


  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BookShelves
              allBooks={allBooks}
              shelves={shelves}
              updateShelf={updateShelf}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              allBooks={allBooks}
              shelves={shelves}
              updateShelf={updateShelf}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;