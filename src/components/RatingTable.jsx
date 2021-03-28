import React from "react";
import RatingTableCalc from "./RatingTableCalc.jsx";
import classes from "./RatingTable.module.css";

function RatingTable(props) {
  const players = props.data;
  return (
    <table className={classes.styledTable}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
          <th>ID</th>
        </tr>
      </thead>
      {players.map((player, index) => {
        return (
          <RatingTableCalc
            key={index}
            index={index}
            id={player._id}
            score={player.score}
            login={player.login}
          />
        );
      })}
    </table>
  );
}
export default RatingTable;
