import React from "react";
import Styled from "styled-components";
import { Input, Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useLocation } from "wouter";

const StyledWrapSearch = Styled.div`
    width: 35%;
    text-align: center;
`;

export const SearchBar = () => {
  const [location, setLocation] = useLocation();
  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
      values.search
        ? setLocation(`/results/${values.search}`)
        : setLocation(location);
    },
  });
  return (
    <StyledWrapSearch>
      <h1>Busca algo...</h1>
      <Form onSubmit={formik.handleSubmit} size="large">
        <Form.Field>
          <Input
            id="search"
            name="search"
            onChange={formik.handleChange}
            value={formik.values.search}
            icon="search"
            iconPosition="left"
          />
        </Form.Field>
        <Button type="submit">Buscar</Button>
      </Form>
    </StyledWrapSearch>
  );
};
