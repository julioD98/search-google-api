import React from "react";
import Styled from "styled-components";
import { Input, Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useLocation } from "wouter";

const StyledWrapSearch = Styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 0px 1px rgba(242,242,242,1);
    h3{
      cursor: pointer;
    }
`;

export const SearchBar = () => {
  const [location, setLocation] = useLocation();
  const formik = useFormik({
    initialValues: {
      search: location.replace("/results/", "").replace(/%20/g, " "),
    },
    onSubmit: (values) => {
      values.search
        ? setLocation(`/results/${values.search}`)
        : setLocation(location);
    },
  });
  const goHome = () => setLocation("/home");
  return (
    <StyledWrapSearch>
      <h3 onClick={goHome}>Busca algo...</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          action={<Button type="submit" icon="search" />}
          id="search"
          name="search"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
      </Form>
    </StyledWrapSearch>
  );
};
