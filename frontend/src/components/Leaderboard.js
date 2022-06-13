import React from "react";

export default function Leaderboard() {
  return (
    <div
      className="d-flex align-items-center justify-content-end"
      style={{ height: "500px" }}>
      <table className="table table-dark table-striped w-25">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Eugene</td>
            <td>Stepnov</td>
            <td>@e93</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Dever</td>
            <td>@md111</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Piper</td>
            <td>@piper</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
