import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

interface SectionProps {
  children: React.ReactNode;
  centered?: boolean;
  id: string;
}

const SectionMain = styled.section<SectionProps>`
  ${({ centered }) =>
    centered &&
    `${
      isMobile
        ? css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2 {
              margin-top: 0 !important;
            }
          `
        : css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2 {
              margin-top: 0 !important;
            }
          `
    }
    `}

  ${isMobile
    ? css`
        min-height: calc(100vh - 120px);

        padding: 60px 0;
        margin: 0 40px;
      `
    : css`
        border-bottom: 1px solid gray;
        min-height: calc(100vh - 180px);

        padding: 90px 0;
        margin: 0 180px;
      `}
`;

const Section = (props: SectionProps) => {
  const { children } = props;

  return <SectionMain {...props}>{children}</SectionMain>;
};
export default Section;
