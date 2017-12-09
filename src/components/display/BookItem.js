import React from "react";
import PropTypes from "prop-types";
import { Item, Label, Button } from "semantic-ui-react";

const BookItem = ({ book, removeBook }) => (
  <Item color="teal">
    <Item.Image src={book.cover} size="tiny" />
    <Item.Content>
      <Item.Header>{book.title}</Item.Header>
        <Button floated="right" color="red" circular icon="trash outline" onClick={() => removeBook(book)} />
      <Item.Meta>
        <span className="authors">{book.authors}</span>
      </Item.Meta>
      {/* <Item.Description>
        Matthew is a musician living in Nashville.
      </Item.Description> */}
      <Item.Extra>
        <Label icon="file" content={book.pages} />
      </Item.Extra>
    </Item.Content>
  </Item>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default BookItem;
