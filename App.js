/*
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        placeholder="Search here..."
        onChange={onChange}
        type="text"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
*/

/* TodoList
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write yout todo..."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>{toDos.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default App;
*/
/* CRYPTO
import { useEffect, useState } from "react";
import styles from "./App.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(1);
  function onSubmit(event) {
    console.log(event);
    setMoney(event.target.value);
  }
  function onMoneyChange(event) {
    setMoney(event.target.value);
  }
  const onCoinChange = (event) =>{
    setSelectedCoin(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((responce) => responce.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>The Coins! {coins.length}</h1>
        {loading ? <strong>Loading...</strong> : null}
        <select onChange={onCoinChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>{coin.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inputMoney">Input your Money</label>
        <input
          id="inputMoney"
          value={money}
          onChange={onMoneyChange}
          placeholder="Money"
          type="number"
        />
      </div>
      <div>
        That will buy you {money / selectedCoin}
      </div>
    </div>
  );
}

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
