import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import RatingTable from "./RatingTable.jsx";
import AuthScreen from "./AuthScreen.jsx";
import Header from "./Header.jsx";
import StickyFooter from "./StickyFooter.jsx";
import GameHomePage from "./GameHomePage.jsx";

import classes from "./App.module.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style>;

function App() {
  const [players, setPlayers] = useState([{}]);

  console.log(players);
  useEffect(() => {
    axios
      .get("/api/rating")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {localStorage.removeItem("loglevel:webpack-dev-server")}
      {localStorage.length > 0 ? <Redirect to="/starting" /> : null}
      <Switch>
        <Route path="/" exact={true}>
          <div className={classes.flexing}>
            <Header />
            <AuthScreen />
            <RatingTable data={players} />
            <StickyFooter />
          </div>
        </Route>
        <Route path="/rating">
          <RatingTable data={players} />
        </Route>
        <Route path="/starting">
          <GameHomePage data={players} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
