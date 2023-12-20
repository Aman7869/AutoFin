import styled from "styled-components";

export const RegistrationStyle = styled.div`
background-color: #475E8F;
height: 90vh; 

& .container {
    max-width: 50%;
}

& .registration-option {
    background-color: #fff;
    padding: 5%;
    // width: 100%;
}

& .registration-section {
    // border: 3px solid red;
    height: 430px;
    // height: 70vh;
    // width: 50%;
    padding-top: 13%;
}

&  .registration-option p{
    font-size: 23px;
    font-weight: 600;
}

&  .img-car{
    display: block;
    margin: 0 auto;
    height: 77px;
    width: 77px;
}

& .btn-registration {
    border: 2px solid #475E8F;
    border-radius: 20px;
    width: 172px;
    color: #475E8F;
}

& .side-component {
    padding: 0px;
}


@media only screen and (max-width: 600px) {
    height: 130vh; 
    
    .container {
        max-width: 92%;
    }

    .side-component{
        padding-top: 5%;
    }
  }
`;