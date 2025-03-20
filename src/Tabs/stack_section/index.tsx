import Title from "../../components/title/title";
import { StackContent, StackItem } from "./__styled";

const StackTab = () => {
  const stack = ["css", "JavaScript", "TypeScript"];

  return (
    <>
      <Title value={<>My stack</>} />
      <StackContent>
        {stack.map((item: string, index: number) => {
          return (
            <StackItem key={index}>
              <img
                src={`/icons/arrow.svg`}
                alt={"arrow"}
                className="stack_arrow"
              />
              <img
                src={`/img/stack/${item}.svg`}
                alt=""
                width={77}
                height={77}
              />
              {item}
            </StackItem>
          );
        })}
      </StackContent>
    </>
  );
};
export default StackTab;
