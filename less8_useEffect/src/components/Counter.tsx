import { FC, useEffect } from "react";

type CounterType = {
  value: number;
};

const Counter: FC<CounterType> = ({ value }: CounterType) => {
  useEffect(() => {
    fetch("")
    .then
    return () => {
      console.log("unmounting Counter Component");
    };
  }, []);
  return <>Counter {value}</>;
};
export default Counter;
