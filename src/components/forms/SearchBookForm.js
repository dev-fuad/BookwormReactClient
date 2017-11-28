import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";
import { search } from "../../store/actions/book";
import axios from "axios";

class SearchBookForm extends Component {
  state = {
    query: '',
    loading: false,
    options: [],
    books: {}
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({ query: data });
    this.timer = setTimeout(() => {
      this.fetchOptions();
    }, 1000);
  }

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onBookSelect(this.state.books[data.value]);
  }

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    // this.props.search(this.state.query);
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  }

  render() {
    return (
      <Form>
        <Dropdown
          search 
          fluid
          placeholder="Search for a book by title"
          value={this.state.query}
          options={this.state.options}
          loading={this.state.loading}
          onSearchChange={this.onSearchChange}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

export default SearchBookForm;

SearchBookForm.propTypes = {
  // search: PropTypes.func.isRequired,
  onBookSelect: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     options: state.searchResults 
//   };
// }

// export default connect(mapStateToProps, { search })(SearchBookForm);