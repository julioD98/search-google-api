import React from "react";
import { Item, Loader } from "semantic-ui-react";

export const ListResults = ({ data }) => {
  return (
    <Item.Group>
      {data ? (
        data.map((item, i) => (
          <Item key={i}>
            <Item.Content>{item.name}</Item.Content>
          </Item>
        ))
      ) : (
        <Loader active />
      )}
    </Item.Group>
  );
};
