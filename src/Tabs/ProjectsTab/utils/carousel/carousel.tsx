import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledCarousel } from "./__styled";
import { useMemo } from "react";

interface Props {
  name: string;
}

export const ProjectCarousel = ({ name }: Props) => {
  const images: any = useMemo(() => {
    return {
      "Aino.World": ["0", "1"],
    };
  }, []);

  return (
    <>
      <StyledCarousel className="crsl" infiniteLoop centerMode>
        {images[name].map((item: any, index: number) => {
          return (
            <img
              key={index}
              src={`/img/projects/${name}/${item}.png`}
              alt={"projpic" + index}
            />
          );
        })}
      </StyledCarousel>
    </>
  );
};
