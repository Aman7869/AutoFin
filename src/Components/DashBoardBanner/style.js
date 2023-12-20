import styled from "styled-components";
import bannerBG from "../../assets/images/river.jpeg"


export const BannerSection = styled.div`

background-image: url(${bannerBG}) !important;
height: 500px;
background-position: center;
background-size: cover;

& .banner-parent {
    padding-top: 6%;
}

& .banner-box {
  background-color: #1d2547b5;
  padding: 2%;
  color: #fff;
}

  & .banner-btn {
    background-color: #F9592C;
    width: 100%;
    border-radius: 20px;
    color: #fff;
  }

  & .theme-color {
    color: #1d2547b5;
  }

  & .theme-orangecolor {
    color: #F9592C;
  }

`;