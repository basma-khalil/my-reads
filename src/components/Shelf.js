import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ shelves, shelf, shelfBooks, updateShelf }) => {

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<Book
					booksList={shelfBooks}
					shelves={shelves}
					updateShelf={updateShelf}
				/>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	shelfBooks: PropTypes.array.isRequired,
	shelves: PropTypes.array.isRequired,
	shelf: PropTypes.string.isRequired,
	updateShelf: PropTypes.func.isRequired,
};

export default Shelf;