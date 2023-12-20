import styled from "styled-components";

export const HeaderStyle = styled.div`
padding: 6px;

& .registration-text {
    padding-top: 6px;
    font-size: 20px;
    font-weight: 600;
    color: #475E8F;
}

@media only screen and (max-width: 600px) {
    .registration-text {
        font-size: 15px;
    }
}
`;