import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

export const DateInput = styled(Input)`
  /* Add specific styles if needed */
`;

export const FileInput = styled.input`
  margin-bottom: 10px;
`;

export const Dropdown = styled.div`
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
  }

  select {
    padding: 8px;
  }
`;

export const Checkbox = styled.div`
  margin-bottom: 10px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: 5px;
`;

export const CheckboxInput = styled.input`
  margin-left: 5px;
`;

export const PriceInput = styled(Input)`
  /* Add specific styles for the price input */
`;

export const SubmitButton = styled(Button)`
  background-color: dodgerblue;
  color: white;
  margin-top: 10px;
`;
