import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    border: 1px gray solid;
    width: 250px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

export const CardTitle = styled.p`
    color: #333;
    font-size: 20px;
    text-align: center;
    opacity: 0.7;
`;

export const PNumber = styled.h2`
    color: #333;
    font-size: 40px;
    text-align: center;
`

export const LinkHome = styled(Link)`
    text-decoration: none;
`;

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
`;