import React, { Component } from 'react';
import { Segment } from "semantic-ui-react";
import SearchBookForm from "../components/forms/SearchBookForm";
import BookForm from "../components/forms/BookForm";

class NewBookPage extends Component {
  state = { 
    book: null
  }

  onBookSelect = book => this.setState({ book });

  addBook = () => console.log('Add');

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

export default NewBookPage;
