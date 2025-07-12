import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>Hello my name is Chris.</StyledHeader>
    )
}

const StyledHeader = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`
