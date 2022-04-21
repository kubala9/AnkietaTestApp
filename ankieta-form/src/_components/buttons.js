import React, { Fragment, useMemo } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const CircleButton = styled.button`
  border-radius: 30px;
  padding: 0;
  width: 40px;
  height: 40px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.green.normal : colors.gray.light};
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.base : colors.gray.dark};
  cursor: pointer;
  border: none;
  &:hover {
    background: ${({ theme: { colors }, primary }) =>
      primary ? colors.gray.light : colors.green.normal};
    color: ${({ theme: { colors }, primary }) =>
      primary ? colors.gray.dark : colors.base};
  }
`;

const RootButton = styled.button`
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.base : colors.green.normal};
  cursor: inherit;
  border: none;/*  */
  background-color: transparent;
  border-radius: 5px;
  cursor: ${(props) =>
    props.to || props.onClick || props.type === "submit"
      ? "pointer"
      : "default"};
  &:hover {
    opacity: 0.8;
  }
  svg {
    font-size: 22px;
    margin: 0 5px 0 0;
  }
`;

const StyledRegularButton = styled(RootButton)`
  background: ${({ theme: { colors }, primary }) =>
    primary ? colors.green.normal : colors.base};
  padding: 12px 15px;
  font-size: 15px;
  border: ${({ theme: { colors }, primary }) =>
    !primary ? `1px solid ${colors.green.dark}` : `none`};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:disabled {
    cursor: default;
    background: ${({ theme: { colors } }) => colors.gray.normal};
  }
`;

const StyledInlineButton = styled(RootButton)`
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ primary }) => (primary ? "16px" : "14px")};
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.black : colors.gray.dark};
  &:hover {
    text-decoration: none;
    color: ${({ theme: { colors }, primary }) =>
      primary ? colors.green.normal : colors.black};
    font-weight: bold;
  }
  svg {
    font-size: 18px;
    margin: 0px 0 0 4px;
  }
  &:disabled {
    cursor: default;
    color: ${({ theme: { colors } }) => colors.gray.normal};
  }
`;

const Link = styled(RouterLink)`
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.gray.dark : colors.green.normal};
  &:hover {
    color: ${({ theme: { colors }, primary }) =>
      primary ? colors.green.normal : colors.base};
    text-decoration: underline;
  }
`;

const Button = ({ primary, variant, icon, iconRight, children, ...props }) => {
  const { to } = props;
  const Component = useMemo(() => {
    switch (variant) {
      case "inline":
        return StyledInlineButton;
      case "regular":
        return StyledRegularButton;
      case "inlineBoldGreen":
        return BoldInlineButton;
      default:
        return StyledRegularButton;
    }
  }, [variant]);
  const content = (
    <Component primary={primary} icon={icon} iconRight={iconRight} {...props}>
      {icon} {children} {iconRight}
    </Component>
  );

  return to ? (
    <Link {...props}>{content}</Link>
  ) : (
    <Fragment>{content}</Fragment>
  );
};


const ActionButton = styled(Button)`
  border: none;
  text-transform: none;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  &:hover {
    color: ${({ theme: { colors }, warning }) =>
      warning ? colors.orange.dark : colors.green.normal};
  }
  &:disabled {
    background: none;
    color: ${({ theme: { colors } }) => colors.gray.normal};
  }
  svg {
    margin: 0px 0 2px 5px;
  }
`;

const ToggleButton = styled(Button)`
  position: absolute;
  top: 25px;
  right: 25px;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  svg {
    font-size: 20px;
  }
`;
const EditButton = styled(Button)`
  background: ${({ theme: { colors } }) => colors.orange.dark};
`;

const BoldInlineButton = styled(StyledInlineButton)`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.green.normal};
  &:hover {
    color: ${({ theme: { colors } }) => colors.gray.dark};
  }
`;

const CircleButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left:20px;
  button {
    margin: 5px;
  }
`;

const StyledButtonRadio = styled.div`
  label {
    display: block;
    position: relative;
    background: ${({ theme: { colors }, selected }) =>
      selected ? colors.orange.dark : colors.base};
    color: ${({ theme: { colors }, selected }) =>
      selected ? colors.base : colors.orange.dark};
    border: 1px solid ${({ theme: { colors } }) => colors.orange.dark};
    padding: 5px 15px;
    border-radius: 4px;
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    font-size: 14px;
  }
  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label:hover {
    background-color: ${({ theme: { colors }, selected }) =>
      selected ? colors.base : colors.orange.dark};
    color: ${({ theme: { colors }, selected }) =>
      selected ? colors.orange.dark : colors.base};
  }
`;

const ButtonRadio = ({ children, label, isSelected, name, handleOnClick }) => {
  return (
    <StyledButtonRadio selected={isSelected} onClick={handleOnClick}>
      <label> {label}</label>
      <input type="radio" name={name} />
    </StyledButtonRadio>
  );
};

export {
  Button,
  Link,
  CircleButton,
  ToggleButton,
  ActionButton,
  CircleButtonsWrapper,
  EditButton,
  ButtonRadio,
};
