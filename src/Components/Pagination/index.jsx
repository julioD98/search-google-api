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

export const Pager = ({ search }) => {
  console.log(search);
  const pages = () => parseInt(search.searchInformation.totalResults) / 10;
  const pagination = {
    href: "www.google.com",
  };
  return (
    <StyledWrapPagination>
      <Pagination totalPages={pages()} activePage={1} pageItem={pagination} />
    </StyledWrapPagination>
  );
};
