import styled from 'styled-components';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Chip from "@material-ui/core/Chip/Chip";

export const GenreSelectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 20px 0;
`;

export const GenreSelectFormControl = styled(FormControl)`
    && {
        min-width: 120px;
    }
`;

export const GenreSelectMenuItem = styled(MenuItem)`
    && {
        ${props => props.selected === true &&`
            font-weight: bold;
            background-color: grey;
        `}
        ${props => props.selected === false &&`
            font-weight: normal;
        `}
    }
`;

export const GenreSelectChipWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const GenreSelectChip = styled(Chip)`
    && {
        margin: 3px;
    }
`;