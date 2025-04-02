import { useEffect, useState } from "react";
import Title from "../../components/title/title";

const textComplete = "frontend.web (developer)";

const MainTab = () => {
  const [text, setText] = useState<string>("");
  const [dashColor, setDashColor] = useState<boolean>(false);

  useEffect(() => {
    if (text !== textComplete) {
      setTimeout(() => {
        setText(text + textComplete[text.length]);
      }, Math.random() * 200);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashColor(!dashColor);
    }, 1000);
    return () => clearInterval(interval);
  }, [dashColor]);

  return (
    <>
      <Title
        value={
          <>
            <div className="flex h-full w-auto justify-center">
              <div className="inline self-center text-6xl font-bold  ">
                {text}
                <span
                  style={{
                    color: dashColor ? "#000" : "transparent",
                  }}
                >
                  _
                </span>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default MainTab;
