import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

function Form({ defaultValues, children, onSubmit }) {
  const methods = useFormContext();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} style={{ margin: '10px' }}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name
            }
          })
          : child;
      })}
    </form>
  );
}

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 100%;
  span {
    width: 350px;
    color: red;
    font-size: 12px;
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme: { colors } }) => colors.gray.normal};
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  margin: 0 5px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.green.normal};
  }
  &[aria-invalid='true'] {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.danger};
  }
`;

const Input = React.forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

const StyledRadio = styled.input`
  border: 1px solid ${({ theme: { colors } }) => colors.gray.normal};
  border-radius: 4px;
  padding: 12px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.green.normal};
  }
  &:[aria-invalid='true'] {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.danger};
  }
`;

const Radio = React.forwardRef((props, ref) => {
  return <StyledRadio type="radio" {...props} ref={ref} />;
})

const StyledSelect = styled.select`
  border: 1px solid ${({ theme: { colors } }) => colors.gray.normal};
  border-radius: 4px;
  padding: 12px;
  margin: 0 5px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.green.normal};
  }
  &:[aria-invalid='true'] {
    outline: none;
    border: 1px solid ${({ theme: { colors } }) => colors.danger};
  }
`;

const Select = React.forwardRef((props, ref) => {
  return (
    <StyledSelect {...props} ref={ref}>
      {props.children}
    </StyledSelect>
  );
})
const Textarea = styled.textarea`
  border: 1px solid #f1f1f4;
  padding: 8px 12px;
`;



export { Form, FormGroup, Input, Select, Textarea, Radio };
