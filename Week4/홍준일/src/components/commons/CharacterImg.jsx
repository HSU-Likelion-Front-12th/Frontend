import React from 'react';
import styled from 'styled-components';
import char from "../assets/상상부기.png"

const CharacterImg = () => {
    return (
        <ImgWrapper>
            <img src={char} />
        </ImgWrapper>
    );
};

const ImgWrapper = styled.div`
   width : 153px;
   height: 166px;
   margin-bottom: 30px;
`;

export default CharacterImg;