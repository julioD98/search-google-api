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
        {data ? (
          data.map((item, i) => (
            <Item key={i}>
              <Item.Content>
                <Item.Header>{item.name}</Item.Header>
                <Item.Description>{item.body}</Item.Description>
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
