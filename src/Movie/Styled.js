import styled from 'styled-components';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

export const MovieCard = styled(Card)`
    && {
        display: flex;
        margin-bottom: 10px;
        
        @media (max-width: 450px) {
            flex-direction: column-reverse;
        }
        @media (min-width: 451px) {
            flex-direction: row;
        }
        
        ${props => props.visible === 0 &&`
            display: none;
        `}
    } 
`;

export const MovieCardContent = styled(CardContent)`
    && {
        flex: 1 1 auto;
    } 
`;

export const MovieCardMedia = styled(CardMedia)`
    && {
        @media (max-width: 450px) {
            flex: 0 0 300px;
        }
        @media (min-width: 451px) {
            height: 231px;
            flex: 0 0 154px;
        }
    }
`;

export const MovieCardMediaImg = styled.img`
    && {
        @media (max-width: 450px) {
            width: 100%;
        }
        @media (min-width: 451px) {
            height: 231px;
        }
    }
`;