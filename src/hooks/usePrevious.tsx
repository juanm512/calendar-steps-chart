import { useState } from "react";
export default function usePrevious(state: any) {
  let [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
}
