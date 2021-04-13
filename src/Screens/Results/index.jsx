import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { ListResults } from "./../../Components/ListResult";
import { SearchBar } from "./../../Components/SearchBar";
import { Paginations } from "./../../Components/Pagination";

const StyledWrapResults = Styled.div`
    width: 50%;
    margin-left: 150px;
    margin-top: 30px;
    margin-bottom: 30px;
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
      <SearchBar />
      <StyledWrapResults>
        <ListResults data={state} />
      </StyledWrapResults>
      <Paginations />
    </>
  );
};
