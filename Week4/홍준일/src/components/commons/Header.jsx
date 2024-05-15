import React from 'react';
import styled from 'styled-components';

const Header = ({ text }) => {
    return (
        <HeaderStyle>
            {text}
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    width: 100%;
    border-bottom: 1px solid #7A7485;
    color: #1D1927;
    padding: 20px;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 34px;
`;

export default Header;