import styled from "styled-components";

export const DealerThankyouStyled = styled.div`
background-color: #475E8F;
height: 90vh; 

& .offer-text {
    color : #475E8F;
}

& .container {
    max-width: 50%;
}

& .registration-option {
    background-color: #fff;
    padding: 5%;
    // height: 57vh;
    height: 500px;
}

& .registration-section {
    // height: 57vh;
    padding-top: 13%;
    height: 430px;
}

& .side-component {
    padding: 0px;
}

& .thanks-btn {
    background-color: #475E8F;
    color: #fff;
    border-radius: 0px;
}

@media only screen and (max-width: 600px) {
    height: 150vh; 
    
    .container {
        max-width: 92%;
    }

    .side-component{
        padding-top: 5%;
    }

    .registration-option {
        height: 80vh;
    }
  }
`;