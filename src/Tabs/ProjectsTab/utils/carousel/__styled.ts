import styled from "styled-components";

import { Carousel, CarouselProps } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)<CarouselProps>`
  & > * > .slider-wrapper > ul > *:not(.selected) {
    /* display: block; */
    /* box-sizing: unset;
    size: 10px 10px; */
    /* border: 2px solid black; */
    min-height: 40%;
    margin: auto 20px;
  }
  & > * > p {
    display: none;
  }
  & > * > .control-dots {
    display: none;
  }
  & > * > .control-arrow {
    /* display: none; */
  }
  & > * > .control-next {
    /* display: none; */
    background-image: url("/icons/carousel-control-arrow.svg");
    width: auto;
  }
`;
