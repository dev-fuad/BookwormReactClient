import React from 'react';
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const AddBookCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add New Book</Card.Header>
      <Link to="/books/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddBookCtA;
