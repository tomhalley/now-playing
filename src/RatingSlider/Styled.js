import styled from 'styled-components';
import Slider from "@material-ui/lab/Slider/Slider";

export const RatingSliderWrapper = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: row;
    margin: 5px 0;
`;

export const RatingSlider = styled(Slider)`
    max-width: 300px;
`;
