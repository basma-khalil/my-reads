import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

const BookShelves = ({ allBooks, shelves, updateShelf }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(booksShelf => (
            booksShelf.id !== "none" && (
              <Shelf
                key={booksShelf.id}
                shelves={shelves}
                shelf={booksShelf.name}
                shelfBooks={allBooks.filter((book) => book.shelf === booksShelf.id)}
                updateShelf={updateShelf}
              />
            )
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookShelves.propTypes = {
  allBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookShelves;