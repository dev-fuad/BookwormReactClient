import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";
import axios from 'axios';
import SearchBookForm from "../components/forms/SearchBookForm";
import BookForm from "../components/forms/BookForm";
import { createBook } from '../store/actions/book';

class NewBookPage extends Component {
  state = { 
    book: null
  }

  onBookSelect = book => {
    this.setState({ book });
    axios
      .get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({ book: { ...book, pages }}));
  }

  addBook = book => 
    this.props.createBook(book)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    );
  }
}

NewBookPage.propTypes = {
  createBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createBook })(NewBookPage);
