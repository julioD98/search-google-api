import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { ListResults } from "./../../Components/ListResult";

const StyledWrapResults = Styled.div`
    width: 50%;
    min-height: 100vh;
    margin-left: 180px;
    margin-top: 30px;
`;

export const Results = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);
  return (
    <>
      <StyledWrapResults>
        <ListResults data={state} />
      </StyledWrapResults>
    </>
  );
};
