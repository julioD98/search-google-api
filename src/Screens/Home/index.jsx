import React from "react";
import Styled from "styled-components";
import { Input, Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useLocation } from "wouter";

const StyledWrap = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;
const StyledWrapSearch = Styled.div`
    width: 35%;
    text-align: center;
`;

export const Home = () => {
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
    <StyledWrap>
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
    </StyledWrap>
  );
};
