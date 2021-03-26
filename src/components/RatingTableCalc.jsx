import React from "react";

function RatingTableCalc(props) {
  return (
    <tbody>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.login}</td>
        <td>{props.score}</td>
        <td>{props.id}</td>
      </tr>
    </tbody>
  );
}

export default RatingTableCalc;
