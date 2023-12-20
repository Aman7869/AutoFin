import styled from "styled-components";
import sidebarImage from "../../assets/images/sidebarImage.jpg"


export const SideStyle = styled.div`
background-image: url(${sidebarImage}) !important;
height: 500px;
// height: 70vh;
background-position: center;
background-size: cover;
color: #fff;
padding: 5%;

& .autofin {
    padding-top: 18%;
}

& .contact-section {
    position: relative;
    top: 123px;
}

& .question {
    font-size: 18px;
    font-weight: 600;
}
`;