import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import icon from "../images/searchIcon.svg";
import { useDispatch } from "react-redux";
import { modify } from "../feats/findWord/wordSlice";

function Search() {
  //const filterword = useSelector((state) => state.findWord.value);
  const dispatch = useDispatch();
  return (
    <div className="search">
      <TextField id="testID" variant="standard" placeholder="Поиск"></TextField>
      <Button
        onClick={() => {
          console.log("123123123123");
          dispatch(modify(document.getElementById("testID").value));
          document.getElementById("testID").value = "";
        }}
      >
        <img src={icon} alt="" />
      </Button>
    </div>
  );
}
export default Search;
