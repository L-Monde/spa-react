import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../feats/counter/counterSlice";

function Navigation() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Stack direction="row" spacing={2} className="nav">
      <Button
        onClick={() => (count > 1 ? dispatch(decrement()) : null)}
        sx={{ color: "#474955" }}
      >
        Назад
      </Button>
      <div className="nav__pages">
        <p className={count === 1 ? "test" : ""}>1</p>
        <p className={count === 2 ? "test" : ""}>2</p>
        <p className={count === 3 ? "test" : ""}>3</p>
        <p className={count === 4 ? "test" : ""}>4</p>
        <p className={count === 5 ? "test" : ""}>5</p>
      </div>
      <Button
        onClick={() => (count < 5 ? dispatch(increment()) : null)}
        sx={{ color: "#474955" }}
      >
        Далее
      </Button>
    </Stack>
  );
}

export default Navigation;
