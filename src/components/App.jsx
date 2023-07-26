import Api from "./Api";
import Search from "./Search";
import Navigation from "./Navigation";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function App() {
  const api = new Api({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const [list, setList] = useState([]);
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

  useEffect(() => {
    api.getData().then((res) => {
      setList({ res }.res);
    });
  }, []);

  //setCounter(2);
  return (
    <div className="root">
      <Search></Search>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="colored">
              <TableCell sx={{ color: "white" }}>ID </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Заголовок
                <Button
                  onClick={() => {
                    filter("title");
                  }}
                >
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.353553"
                      y1="0.646447"
                      x2="6.18011"
                      y2="6.47301"
                      stroke="white"
                    />
                    <line
                      x1="5.64645"
                      y1="6.30331"
                      x2="11.3033"
                      y2="0.646453"
                      stroke="white"
                    />
                  </svg>
                </Button>
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Описание
                <Button
                  onClick={() => {
                    filter("body");
                  }}
                >
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.353553"
                      y1="0.646447"
                      x2="6.18011"
                      y2="6.47301"
                      stroke="white"
                    />
                    <line
                      x1="5.64645"
                      y1="6.30331"
                      x2="11.3033"
                      y2="0.646453"
                      stroke="white"
                    />
                  </svg>
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
      <Navigation></Navigation>
    </div>
  );
}

export default App;
