import React from "react";
import image from "../assets/image/상상부기.png";
import styled from "styled-components";

const ImageStyle = styled.img`
    width: 10rem;
    height: 12rem;
    object-fit: cover;
`;

const MainImage = () => {
    return <ImageStyle src={image}></ImageStyle>;
};

export default MainImage;
