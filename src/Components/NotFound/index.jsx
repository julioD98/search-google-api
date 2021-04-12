import React from "react";
import Styled from "styled-components";
import { Button, Message } from "semantic-ui-react";

const StyledWrapError = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const goback = () => {
  window.history.back();
};
export const NotFound = () => {
  return (
    <StyledWrapError>
      <Message negative>
        <h2>Error 404: Page not found</h2>
      </Message>
      <Button negative onClick={goback}>
        Go back
      </Button>
    </StyledWrapError>
  );
};
