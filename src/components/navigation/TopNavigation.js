import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import * as actions from "../../store/actions/auth";
import { allBooksSelector } from "../../store/reducers/books";

const TopNavigation = ({ user, logout, hasBooks }) => (
  <Menu>
    <Menu.Item as={Link} to="/dashboard">
      Dashboard
    </Menu.Item>
    {hasBooks && (
      <Menu.Item as={Link} to="/books/new">
        Add New Book
      </Menu.Item>
    )}
    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src={`https://robohash.org/set_set3/${user.email}?size=50x50`} />}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
