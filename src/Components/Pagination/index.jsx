import React from "react";
import { Pagination } from "semantic-ui-react";
import Styled from "styled-components";

const StyledWrapPagination = Styled.div`
    width: 50%;
    margin-left: 150px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Paginations = () => {
  return (
    <StyledWrapPagination>
      <Pagination totalPages={100} activePage={1} />
    </StyledWrapPagination>
  );
};
