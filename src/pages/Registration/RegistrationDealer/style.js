import styled from "styled-components";


export const DealerStyle = styled.div`
background-color: #475E8F;
height: 700px; 
// height: 90vh; 

& .offer-text {
    color : #475E8F;
}

& .container {
    max-width: 50%;
    
}

& .registration-option {
    background-color: #fff;
    padding: 5%;
    overflow-y: scroll;
    height: 500px;
}
& .registration-option::-webkit-scrollbar {
    width: 5px; /* Set the width of the scrollbar */
  }
& .registration-option::-webkit-scrollbar-track {
background-color: #f1f1f1; /* Set the background color of the track */
}

& .registration-option::-webkit-scrollbar-thumb {
    background-color: #888; /* Set the color of the thumb */
    border-radius: 6px; /* Set the border radius of the thumb */
  }

  & .registration-option::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Change the color of the thumb on hover */
  }


& .registration-section {
    // height: 70vh;
    height: 430px;
    padding-top: 13%;
}

& .side-component {
    padding: 0px;
}

& .register-btn {
    background-color: #F9592C;
    color: #fff;
    border-radius: 20px;
    float: right;
}

@media only screen and (max-width: 600px) {
    height: 150vh; 
    
    .container {
        max-width: 92%;
    }

    .side-component{
        padding-top: 5%;
    }
  }
`;