import React, { Component } from "react";
import "./books-list.css";

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.createBook = this.createBook.bind(this);
  }

  createBook(book) {
    let title = book.title;
    let author = book.author;
    if (book.title.length > 70) {
      title = `${book.title.slice(0, 70)}...`;
    }
    if (book.title.author > 30) {
      title = `${book.author.slice(0, 30)}...`;
    }
    return (
      <div className="book">
        <img
          src={`http://booksdescr.org/covers/${book.coverurl}`}
          alt="Book Cover"
          className="book-cover"
        />
        <div className="info">
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
          <a
            className="download"
            href={`http://libgen.io/get.php?md5=${book.md5.toLowerCase()}`}
          >
            Download
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="books-container">
        {this.props.books.map(this.createBook)}
      </div>
    );
  }
}

export default BooksList;
