import api from "./Api";
import tick from "../images/tableButton.svg";

import { useState } from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Main(props) {
  const { list, setList } = props;

  const [ordered, setOrdered] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const filterword = useSelector((state) => state.word.value);

  function filter(item) {
    if (ordered) {
      api.getData().then((res) => {
        setList({ res }.res);
      });
      setOrdered(false);
    } else {
      const listAlt = [...list].sort((a, b) => a[item].localeCompare(b[item]));
      setList(listAlt);
      setOrdered(true);
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="main__heading">
            <TableCell sx={{ color: "white" }}>ID </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Заголовок
              <Button
                onClick={() => {
                  filter("title");
                }}
              >
                <img src={tick} alt="" />
              </Button>
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Описание
              <Button
                onClick={() => {
                  filter("body");
                }}
              >
                <img src={tick} alt="" />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) =>
            (item.userId === count) &
            (count <= 5) &
            (filterword === ""
              ? item.title.length !== 0
              : item.title.includes(filterword) ||
                item.body.includes(filterword)) ? (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.body}</TableCell>
              </TableRow>
            ) : (
              ""
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Main;
