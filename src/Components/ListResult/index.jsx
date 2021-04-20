import React from "react";
import { Item, Loader } from "semantic-ui-react";
import Styled from "styled-components";

const StyledWrapResults = Styled.div`
  margin: 30px 80px;
  width: 60%;
`;

export const ListResults = ({ data }) => {
  console.log(data);
  return (
    <StyledWrapResults>
      <Item.Group divided>
        {data.items ? (
          data.items.map((item, i) => (
            <Item key={i}>
              <Item.Content>
                <Item.Header>{item.title}</Item.Header>
                <Item.Meta>{item.link}</Item.Meta>
                <Item.Description>{item.snippet}</Item.Description>
              </Item.Content>
            </Item>
          ))
        ) : (
          <Loader active />
        )}
      </Item.Group>
    </StyledWrapResults>
  );
};
