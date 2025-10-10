import { Button } from "@mantine/core";
import { useCallback, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const onCountIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  return (
    <Button type="button" onClick={onCountIncrease} rightSection={count ? count : "0"}>
      Counter is equals
    </Button>
  );
}
