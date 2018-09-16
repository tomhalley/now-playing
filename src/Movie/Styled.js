import styled from 'styled-components';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

export const MovieCard = styled(Card)`
    && {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        
        ${props => props.visible === 0 &&`
            display: none;
        `}
    } 
`;

export const MovieCardContent = styled(CardContent)`
    && {
        flex: 1 auto;
    } 
`;

export const MovieCardMedia = styled(CardMedia)`
    && {
        height: 231px;
        flex: 0 0 154px;
    }
`;