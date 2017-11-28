import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { allBooksSelector } from "../store/reducers/books";
import ConfirmEmailMessage from "../components/messages/ConfirmEmailMessage";
import AddBookCtA from "../components/ctas/AddBookCtA";

const DashboardPage = ({ isConfirmed, books }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {books.length === 0 && <AddBookCtA />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps)(DashboardPage);