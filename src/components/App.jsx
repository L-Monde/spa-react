import api from "./Api";
import Search from "./Search";
import Main from "./Main";
import Navigation from "./Navigation";

import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.getData().then((res) => {
      setList({ res }.res);
    });
  }, []);

  //setCounter(2);
  return (
    <div className="root">
      <Search></Search>
      <Main list={list} setList={setList}></Main>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
