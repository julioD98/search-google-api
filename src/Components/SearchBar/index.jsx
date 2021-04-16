import React from "react";
import { useFormik } from "formik";
import { Form, Input, Button } from "semantic-ui-react";
import Styled from "styled-components";

const StyledwrapForm = Styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ query }) => (query ? "flex-start" : "center;")};
  flex-direction: column;
  width: 100%;
  min-height: ${({ query }) => (query ? "60px" : "100vh")};
`;

const StyledForm = Styled(Form)`
  width: 35%;
  display: ${({ query }) => (query ? "flex" : "block")};
  text-align: ${({ query }) => (query ? "left" : "center")};
  button{
    margin-top:${({ query }) => (query ? "0px" : "20px !important")};
  }
  h1{
    margin-right:${({ query }) => (query ? "20px" : "0px")};
  }
`;

export const SearchBar = ({ query, setquery }) => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => setquery(values.search),
  });
  return (
    <StyledwrapForm query={query}>
      <StyledForm onSubmit={formik.handleSubmit} query={query}>
        <h1>Busca algo...</h1>
        <Form.Field inline={query ? true : false}>
          <Input id="search" name="search" onChange={formik.handleChange} />
          <Button type="submit">Buscar</Button>
        </Form.Field>
      </StyledForm>
    </StyledwrapForm>
  );
};
