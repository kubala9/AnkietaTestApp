import React from "react";
import styled from "styled-components";
import { IoMdWarning } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";
import { Button } from "./buttons";


const ValidationMessage = styled.div`
    color: red;
    font-size: 12px;
`;

const Title = styled.h5`
margin: 0 0 1em;
padding: 10px;
font-size: 1.5rem;
line-height: 3.5rem;
border-bottom: 1px solid;
display: flex;
justify-content: space-between;
    svg {
        width: 4rem;
        height: 3rem;
    }
`;

const OneLineSpan = styled.span`
white-space: nowrap;
margin: 0px 10px;
font-weight: bold;
`;

const ErrorMessageWrapper = styled.div`
    margin: 60px 25px;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.gray.dark};
    svg {
        font-size: 66px;
        color: ${({ theme: { colors } }) => colors.gray.normal};
    }
    p {
        font-size: 14px;
        margin-top: 30px;
    }
`;

function ErrorMessage({ message, refreshAction }) {
    return (
        <ErrorMessageWrapper>
            <IoMdWarning />
            <h3>{message}</h3> 
            <Button onClick={refreshAction}>Spróbuj ponownie</Button>
        </ErrorMessageWrapper>
    );
}


function EmptyListMask({ title, description }) {
    return (
        <ErrorMessageWrapper>
            <ImFilesEmpty />
            <h3>{title}</h3>
            <p>{description}</p>
        </ErrorMessageWrapper>
    );
}

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${({ isCol }) => (isCol ? "column" : undefined)};
    align-items: center;
    justify-content: ${({ justify }) => (justify ? justify : undefined)};
    margin: 20px;
`;

export {
    ErrorMessage,
    OneLineSpan,
    EmptyListMask,
    FlexBox,
    ValidationMessage,
    Title,
}