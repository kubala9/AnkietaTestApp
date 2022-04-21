import styled from "styled-components";


const CreatorContainer = styled.div`
background: ${({ theme: { colors } }) => colors.gray.light};
padding: 2rem;
margin: 10rem auto;
max-width: 1024px;
`;

const RuleItemWrapper = styled.fieldset`
border: none;
display: flex;
margin: 0;
justify-content: space-between;
align-items: center;
`;

export { CreatorContainer, RuleItemWrapper };
