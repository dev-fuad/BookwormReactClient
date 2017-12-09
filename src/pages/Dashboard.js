import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Item } from "semantic-ui-react";

import { allBooksSelector } from "../store/reducers/books";
import ConfirmEmailMessage from "../components/messages/ConfirmEmailMessage";
import AddBookCtA from "../components/ctas/AddBookCtA";
import BookItem from "../components/display/BookItem";
import { fetchBooks, deleteBook } from "../store/actions/book";

class DashboardPage extends Component {
  state = {
    books: this.props.books,
    isConfirmed: this.props.isConfirmed
  }

  componentDidMount = () => this.onInit();

  componentWillReceiveProps(nextProps) {
    this.setState({
      books: nextProps.books,
      isConfirmed: nextProps.isConfirmed
    });
  }

  onInit = () => this.props.fetchBooks();

  onDelete = book => {
    this.props.deleteBook(book._id);
  }

  removeBook = id => 
    this.state.books.filter(book => book._id !== id);

  render() {
    const { isConfirmed, books } = this.state;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}

        {books.length === 0 ? (
          <AddBookCtA />
        ) : (
          <Item.Group divided>
            {books.map((book) => 
              <BookItem key={book._id} book={book} removeBook={this.onDelete} />
            )}
          </Item.Group>
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.apply.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps, { fetchBooks, deleteBook })(DashboardPage);
