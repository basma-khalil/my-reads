import PropTypes from "prop-types";

const Book = ({ booksList, shelves, updateShelf }) => {

	const handleShelfChanger = (event, book) => {

		updateShelf(book, event.target.value);
	};


	return (
		<ol className="books-grid">
			{booksList
				.filter(book => book.imageLinks && book.authors)
				.map((book) => (
					<li key={book.id}>
						<div className="book">
							<div className="book-top">
								<div
									className="book-cover"
									style={{
									width: 128,
									height: 193,
									backgroundImage: `url(${book.imageLinks.thumbnail})`,
									}}
								></div>
								<div className="book-shelf-changer">
									<select
										value={book.shelf ? book.shelf : "none"}
										onChange={(event) => handleShelfChanger(event, book)}
									>
										<option value="move-to" disabled>Move to...</option>
										{shelves.map((bookShelf) => (
											<option key={bookShelf.id} value={bookShelf.id}>{bookShelf.name}</option>
										))}
									</select>
								</div>
							</div>
							<div className="book-title">{book.title}</div>
							<div className="book-authors">{book.authors.join(" and ")}</div>
						</div>
					</li>
				))
			}
		</ol>
	);
};

Book.propTypes = {
	booksList: PropTypes.array.isRequired,
	shelves: PropTypes.array.isRequired,
	updateShelf: PropTypes.func.isRequired,
};

export default Book;