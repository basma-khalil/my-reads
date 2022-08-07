import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { search } from "../utils/BooksAPI";
import Book from "./Book";

const Search = ({ allBooks, shelves, updateShelf }) => {

  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);


  const updateQuery = (query) => {
    setQuery(query);
  };


  useEffect(() => {
    let unmounted = false;

    const reflectBookshelf = (response) => {
      !response.error && (
        response.map((resBook) => (
          allBooks.map((book) => (
            (resBook.id === book.id) && (
              resBook.shelf = book.shelf
            )
          ))
        ))
      )
      return response;
    };

    const searchBooks = async (query) => {
      let res;

      if (!unmounted) {
        if (query) {
          try {
            const apiResults = await search(query);
            res = reflectBookshelf(apiResults);
            console.log(res);

          } catch (error) {
            res = error;
            console.log(error);
          }

        } else {
          res = [];
        }
        setSearchedBooks(res);
      }
    };
    searchBooks(query);

    return () => {
      unmounted = true;
    };
  }, [allBooks, query]);


  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {
          searchedBooks && (
            searchedBooks.error
              ? <p style={{textAlign: "center",}}>
                  {`No results found for your search "${query}".`}
                </p>
              : <Book
                  booksList={searchedBooks}
                  shelves={shelves}
                  updateShelf={updateShelf}
                />
          )
        }
      </div>
    </div>
  );
};

Search.propTypes = {
  allBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Search;