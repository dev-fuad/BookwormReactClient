import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { allBooksSelector } from "../store/reducers/books";
import ConfirmEmailMessage from "../components/messages/ConfirmEmailMessage";
import AddBookCtA from "../components/ctas/AddBookCtA";
import { fetchBooks } from "../store/actions/book";

class DashboardPage extends Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}

        {books.length === 0 ? <AddBookCtA /> : <p>You have books!</p>}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);
